const { lite } = require("../lite");
const { sleep } = require("../lib/functions");
const fs = require("fs");
const path = require("path");

lite({
  pattern: "restart",
  desc: "Restart QUEEN NETHU-MD",
  react: "🔄",
  category: "owner",
  filename: __filename
}, async (conn, mek, m, { reply, isCreator }) => {
  if (!isCreator) return reply("Only the bot owner can use this command.");

  const markerPath = path.join(__dirname, "../data/restart_notify.json");
  fs.writeFileSync(markerPath, JSON.stringify({
    chat: m.chat,
    sender: m.sender
  }));

  await reply("♻️ Restarting QUEEN NETHU QUOTES ᥫᩣ...\nYou'll be notified when it comes back online.");
  await sleep(1000);
  require("child_process").exec("pm2 restart all");
});
