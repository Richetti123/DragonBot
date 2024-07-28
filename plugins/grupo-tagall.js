let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@clan.sayayin_ofc // @clan.sayayin_fem ${pesan}`
let teks = `*𝑨𝒍𝒐𝒐, 𝒍𝒆𝒂𝒏 𝒍𝒐𝒔 𝒎𝒆𝒏𝒔𝒂𝒋𝒆𝒔 𝒑𝒍𝒂𝒏𝒕𝒂𝒔 𝒌𝒍𝒔. 😝*\n${oi}\n\n*🚨𝙈𝙚𝙣𝙘𝙞𝙤𝙣𝙚𝙨*\n`
for (let mem of participants) {
teks += `💸 @${mem.id.split('@')[0]}\n`}
teks += `DragonBot`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
