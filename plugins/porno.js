let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
let str = `
FITUR DI NONAKTIFKAN BANYAK BOCAH
`.trim()

  await m.reply('Searching...')
    axios.get('https://freerestapi.herokuapp.com/api/v1/randomp')
    .then((res) => {
      imageToBase64(res.data.url)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')

     conn.sendFile(m.chat, buf, 'porno.jpg', str, m)
        })
    })
}
handler.help = ['bokepic']
handler.tags = ['bokep']
handler.command = /^(bokepic)$/i
handler.off = false
handler.private = false

handler.limit = 1

module.exports = handler
