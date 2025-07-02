const config = require('../settings');
const { lite } = require('../lite');
const axios = require('axios');

/**
 * Helper function to check if a value is a "true" boolean state.
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns true if the value is "true", false otherwise.
 */
function isEnabled(value) {
    return value && value.toString().toLowerCase() === 'true';
}

/**
 * Helper function to generate the formatted list of settings with emojis.
 * @returns {string} - The formatted string of all settings with corresponding emojis.
 */
function generateSettingsList() {
    const settingsList = [
        { name: 'Status View', key: 'AUTO_STATUS_SEEN', emoji: '👁️' },
        { name: 'Status Reply', key: 'AUTO_STATUS_REPLY', emoji: '💬' },
        { name: 'Auto Reply', key: 'AUTO_REPLY', emoji: '↩️' },
        { name: 'Auto Sticker', key: 'AUTO_STICKER', emoji: '🖼️' },
        { name: 'Custom Reacts', key: 'CUSTOM_REACT', emoji: '👍' },
        { name: 'Auto React', key: 'AUTO_REACT', emoji: '💥' },
        { name: 'Delete Links', key: 'DELETE_LINKS', emoji: '🔗' },
        { name: 'Anti-Link', key: 'ANTI_LINK', emoji: '🚫' },
        { name: 'Anti-Bad Words', key: 'ANTI_BAD', emoji: '🛑' },
        { name: 'Auto Typing', key: 'AUTO_TYPING', emoji: '⌨️' },
        { name: 'Auto Recording', key: 'AUTO_RECORDING', emoji: '🎙️' },
        { name: 'Always Online', key: 'ALWAYS_ONLINE', emoji: '🌐' },
        { name: 'Public Mode', key: 'PUBLIC_MODE', emoji: '🌍' },
        { name: 'Read Message', key: 'READ_MESSAGE', emoji: '📖' },
    ];

    return settingsList.map(s => 
        `🔹 *${s.emoji} ${s.name}:* ${isEnabled(config[s.key]) ? "✅ Enabled" : "❌ Disabled"}`
    ).join('\n');
}

lite({
    pattern: 'env',
    alias: ['setting', 'allvar'],
    desc: 'View and manage bot settings',
    category: 'main',
    react: '⚙️',
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        // Generate the formatted settings message with emojis
        const settingsMessage = `
╭━━━〔 *𝐐𝐔𝐄𝐄𝐍 𝐍𝐄𝐓𝐇𝐔-𝐌𝐃 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒* 〕━━━┈⊷
┃ *📌 Current Configurations:*
┃        ─────────
${generateSettingsList()}
╰━━━━━━━━━━┈⊷

🔗 *Description:* ${config.DESCRIPTION || 'No description available'}

`;


        // Send settings message with an image
        await conn.sendMessage(from, {
            image: { url: config.MENU_IMAGE_URL },
            caption: settingsMessage,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363402784390598@newsletter',
                    newsletterName: "꧁࿇♥𝐐𝐔𝐄𝐄𝐍 𝐍𝐄𝐓𝐇𝐔-𝐌𝐃♥࿇꧂",
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        

    } catch (e) {
        console.error("❌ Error in env command:", e);
        reply("⚠️ An error occurred while fetching the settings. Please try again.");
    }
});
