import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `Bot ini menggunakan script by FangzXD\n\n*Version:* Global Version V4.5`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
const message = {
            document: { url: thumb },
            jpegThumbnail: await (await fetch(thumb)).buffer(), fileName: global.wm, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: titlebot,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: '🗣️ | Joind Official Group WhatsApp',
                        url: 'https://bit.ly/3SzhgLV'
                    }
                },
                {
                    urlButton: {
                        displayText: '🗣️ | Joind Discord Comunity VectorBot',
                        url: 'https://www.google.com/search?q=Sementara+VictorBot+Belum+Mempunyai+Discord+Comunity+Yah%2C+Di+Tunggu+Aja+Kak%21%21+%5E%7E%5E&client=ms-android-oppo&sxsrf=ALiCzsbLdrXcnb3HCBuf2PI1RKn0nxEjqQ%3A1664185516318&ei=rHQxY5qRE67gseMP2-6EqA8&oq=Sementara+VictorBot+Belum+Mempunyai+Discord+Comunity+Yah%2C+Di+Tunggu+Aja+Kak%21%21+%5E%7E%5E&gs_lcp=ChNtb2JpbGUtZ3dzLXdpei1zZXJwEAMyBAghEAo6BwgAEEcQsANKBAhBGABQ9BdY9BdgqSBoAXAAeACAAYwEiAGVBpIBBzItMS41LTGYAQCgAQHIAQjAAQE&sclient=mobile-gws-wiz-serp',
                    }
                },
            ]
        }
        conn.sendMessage(m.chat, message)
conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.wm, body: 'Script By FangzXD Recode By VicTeam⚡', sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.help = ['cekversi','versi']
handler.tags = ['info']
handler.command =  /^(cekversi)$/i

handler.register = true
handler.premium = false
handler.limit = false

export default handler