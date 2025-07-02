const { lite } = require("../lite");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const AdmZip = require("adm-zip");
const { setCommitHash, getCommitHash } = require("../data/updateDB");

lite({
  pattern: "update",
  alias: ["upgrade", "sync"],
  react: "🆕",
  desc: "Update the bot to the latest version.",
  category: "misc",
  filename: __filename
}, async (client, message, args, { reply, isOwner }) => {
  if (!isOwner) return reply("❎ Only the bot owner can perform updates.");

  try {
    await reply("🔍 Checking for JANA QUOTES ᥫᩣupdates...");

    // 1. Get latest commit hash from GitHub
    const { data: commitData } = await axios.get("https://api.github.com/repos/NaCkS-ai/Sung-Suho-MD/commits/main");
    const latestHash = commitData.sha;

    // 2. Compare with local stored commit hash
    const localHash = await getCommitHash();
    if (latestHash === localHash) {
      return reply("✅ JANA QUOTES ᥫᩣ is already up to date!");
    }

    await reply("🚀 New version found! Downloading update...");

    // 3. Download ZIP of latest code
    const zipUrl = "https://github.com/MASTER-JANA/JANA-MD/archive/main.zip";
    const zipPath = path.join(__dirname, "update.zip");
    const { data: zipBuffer } = await axios.get(zipUrl, { responseType: "arraybuffer" });
    fs.writeFileSync(zipPath, zipBuffer);

    // 4. Extract
    await reply("📦 Extracting update files...");
    const extractDir = path.join(__dirname, "update");
    const zip = new AdmZip(zipPath);
    zip.extractAllTo(extractDir, true);

    // 5. Copy files excluding sensitive config
    await reply("🛠️ Applying update...");
    const sourceDir = path.join(extractDir, "JANA-MD-main");
    const targetDir = path.join(__dirname, "..");
    copyFolderRecursive(sourceDir, targetDir);

    // 6. Update commit hash
    await setCommitHash(latestHash);

    // 7. Clean up
    fs.unlinkSync(zipPath);
    fs.rmSync(extractDir, { recursive: true, force: true });

    await reply("✅ Update applied successfully. Restarting...");
    process.exit(0);

  } catch (err) {
    console.error("❌ Update Error:", err);
    return reply("❌ Update failed. Try again or update manually.");
  }
});

// Copy folder recursively, skip config files
function copyFolderRecursive(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

  const items = fs.readdirSync(src);
  for (const item of items) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);

    if (["settings.js", "app.json"].includes(item)) {
      console.log(`🔒 Skipping protected file: ${item}`);
      continue;
    }

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyFolderRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
