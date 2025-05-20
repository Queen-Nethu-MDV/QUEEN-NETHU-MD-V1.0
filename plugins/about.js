const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["awais","whois"], 
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `
*╭━━〔 𝑸𝑼𝑬𝑬𝑵 𝑵𝑬𝑻𝑯𝑼-𝑴𝑫 〕━━┈⊷*

*👋 HELLO ${pushname}*

*╰──────────────┈⊷*
*╭━━━〔 𝑀𝑌 𝐴𝐵𝑂𝑈𝑇 〕━━━┈⊷*
*┃★╭──────────────*
*┃★│* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs ǫᴜᴇᴇɴ ɴᴇᴛʜᴜ-ᴍᴅ-ʙᴏᴛ*
*┃★│* *ᴄʀᴇᴀᴛᴇʀ : ʟɪʏᴏ*
*┃★│* *ʀᴇᴀʟ ɴᴀᴍᴇ : ʙɪɢᴜɴ sᴀʜᴀsʜʀᴀ*
*┃★│* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ : ꧁ᴅᴀʀᴋ ʟɪʏᴏ ꧂*
*┃★│* *ᴀɢᴇ : 17 ʏᴇᴀʀ*
*┃★│* *ᴄɪᴛʏ :ᴄᴏʟᴏᴍʙᴏ *
*┃★│* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • SPECIAL THANKS FOR • ]*
*╭━━━〔 THANKS TO 〕━━━┈⊷*
*┃★╭──────────────*
*┃★│* *▢ᴅᴀᴠɪɴ*
*┃★│* *▢ᴠᴏʀᴛᴇx*
*┃★│* *▢ᴅᴀʀᴋ sʜᴀᴅᴏᴡ™*
*┃★│* *▢ᴘᴀɴsɪʟᴜ ɴᴇᴛʜᴍɪɴᴀ*
*┃★│* *▢s.ʜ.ɪ.ᴅ.sᴀᴍᴀʀᴀsɪɴɢʜᴇ*
*┃★│* *▢ᴀᴅᴍɪɴ ᴘɪʀᴀᴛᴇ*
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*

*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ɴᴇᴛʜᴜ ᴍᴅ⁸⁸⁷
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:`https://i.ibb.co/B2gnQ2rm/IMG-20250216-WA0140.jpg`},caption:about,
                             contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363418236531781@newsletter',
      newsletterName: 'Queen Nethu-MD',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
} catch (e) {
console.log(e)
reply(`${e}`)
}
})
