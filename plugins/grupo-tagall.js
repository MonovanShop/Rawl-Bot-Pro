let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@𝕤𝕨𝕖𝕖𝕥_𝕓𝕠𝕥_𝕡𝕣𝕠 ${pesan}`
let teks = `*Activense de fast 🤬*\n${oi}\n\n*🚨𝙈𝙚𝙣𝙘𝙞𝙤𝙣𝙚𝙨*\n`
for (let mem of participants) {
teks += `😎 @${mem.id.split('@')[0]}\n`}
teks += `𝑺𝑾𝑬𝑬𝑻 𝑩𝑶𝑻 𝑩𝒀 𝑴𝑶𝑵𝑶𝑽𝑨𝑵 𝑽𝑬𝑵𝑻𝑨𝑺`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
