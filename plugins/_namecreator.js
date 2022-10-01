import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `*❔ Ngapain nyari Owner ku*\n\nhttp://bīt.ly/ᯤ`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
const message = {
            document: { url: thumbdoc },
            jpegThumbnail: await (await fetch(thumbdoc)).buffer(), fileName: global.wm2, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: titlebot,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: '💰| Donasi 赤',
                        url: 'https://trakteer.id/VictorBot',
                    }
                },
                {
                    urlButton: {
                        displayText: '📞 | Owner Number 赤',
                        url: 'https://wa.me/6281248537085',
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '📝 | Menu 赤',
                        id: '.m'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '🚀 | Ping Test 赤',
                        id: '.ping'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '🙅‍♂️ | Jangan Di Clik 赤',
                        id: 'huuu'
                    }
                },
            ]
        }
        conn.sendMessage(m.chat, message)
conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.wm, body: 'Yaw? ada apa kak?', sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.command = /^(nameown)$/i

handler.register = true
handler.exp = 3

export default handler