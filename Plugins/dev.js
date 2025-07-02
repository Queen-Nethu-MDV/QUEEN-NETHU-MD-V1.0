const { lite, commands } = require('../lite');
const config = require('../settings'); // Make sure MENU_IMAGE_URL is defined in settings.js

lite({
    pattern: "owner",
    alias: ["developer", "dev"],
    desc: "Displays the developer info",
    category: "owner",
    react: "👨‍💻",
    filename: __filename
}, async (conn, mek, m, {
    from, reply, pushname
}) => {
    try {
        const name = pushname || "there";

        const text = `
╭─⌈ * ꧁࿇♥𝐐𝐔𝐄𝐄𝐍 𝐍𝐄𝐓𝐇𝐔-𝐌𝐃 𝐃𝐄𝐕♥࿇꧂* ⌋
│
│ 👋 Hello *${name}*,
│
│ 🤖 I’m *the owner* of a multifunctional
│    WhatsApp Bot built to assist you!
│
│ 👨‍💻 *OWNER DETAILS:*
│ ───────────────
│ 🧠 *Name* : Mr Liyo
│ 🕯️ *Age* : +17
│ ☎️ *Contact* : wa.me/94779702531
│ ▶️ *YouTube* :
│    https://youtube.com/@JANATECH01
│
│ ⚡ Powered by *Mr Liyo*
╰───────────────`.trim();

        await conn.sendMessage(from, {
            image: { url: config.MENU_IMAGE_URL || 'https://files.catbox.moe/6kb7n8.jpg' },
            caption: text,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363402784390598@newsletter',
                    newsletterName: '『 ᴊᴀɴᴀ ᴍᴅ 』',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in .dev command:", e);
        reply(`❌ Error: ${e.message}`);
    }
});
