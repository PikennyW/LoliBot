const fs = require('fs-extra')


exports.wait = () => {
    return `Por favor, espere un momento~`
}

exports.gsm = (result) => {
    return `➸ *Modelos HP*: ${result.title}\n➸ *Especificación*: ${result.spec}`
}

exports.waitmutualan = () => {
    return `Buscando un compañero...`
}

exports.joox = (result) => {
    return `*Canción encontrada!*\n\n➸ *Cantante*: ${result[0].penyanyi}\n➸ *Título*: ${result[0].judul}\n➸ *Álbum*: ${result[0].album}\n➸ *Extensión*: ${result[0].ext}\n➸ *Tamaño*: ${result[0].filesize}\n➸ *Duración*: ${result[0].duration}\n\nSe está enviando el archivo, por favor, espere...`
}

exports.videoLimit = () => {
    return `El tamaño del video es demasiado grande!`
}

exports.ok = () => {
    return `Ok~`
}

exports.detectorOn = (name, formattedTitle) => {
    return `*「 ANTI LINK DE GRUPOS 」*\n\nAtención miembros del grupo ${(name || formattedTitle)}\nEste grupo tiene un detector de enlace anti-grupo, si un miembro envía un enlace de grupo aquí, será expulsado automáticamente por LoliBot.\n\nEso es todo, gracias.\n- Admin ${(name || formattedTitle)}`
}

exports.levelingOn = () => {
    return `La función de niveles fue exitosamente *activada*!`
}

exports.levelingOff = () => {
    return `La función de niveles fue exitosamente *desactivada*!`
}

exports.levelingOnAlready = () => {
    return `La función de niveles fue activada previamente.`
}

exports.levelingNotOn = () => {
    return `La función de niveles no ha sido activada!`
}
exports.detectorOff = () => {
    return `La función anti-link fue exitosamente *desactivada*!`
}

exports.detectorOnAlready = () => {
    return `La función anti-link fue activada anteriormente.`
}

exports.linkDetected = () => {
    return `*「 ANTI LINK DE GRUPOS 」*\n\nEnviaste link de un grupo!\nLo siento, pero debes irte...\nAdiós~`
}

exports.playt = (result) => {
    return `*Canción Encontrada!*\n\n➸ *Título*: ${result[0].title}\n➸ *Extensión*: ${result[0].ext}\n➸ *Tamaño*: ${result[0].size}\n➸ *Duración*: ${result[0].duration}\n\nEl archivo de está enviado, por favor, espere...`
}

exports.wrongFormat = () => {
    return `Format salah!`
}

exports.wrongFormatt = () => {
    return `Format salah!`
    aruga.sendFile(from, './media/register.png', id) 
}

exports.emptyMess = () => {
    return `Por favor, ingrese el mensaje que desea envíar!`
}

exports.Yt3 = () => {
return `[❗] Hubo un error y no se pudo convertir a Mp3!`
}

exports.Yt4 = () => {
return `[❗] Ocurrió un error, quizás el error sea causado por el sistema.`
}

exports.cmdNotFound = () => {
    return `Comando no encontrado!`
}

exports.blocked = () => {
    return `El bot no recibe llamadas. Debido a que rompiste las reglas fuiste bloqueado!\n\nPongase en contacto con el propietario: wa.me/51966653383`
}

exports.ownerOnly = () => {
    return `Este comando es exclusivo para Pikenny!`
}

exports.doneOwner = () => {
    return `Listo, Pikenny~`
}

exports.groupOnly = () => {
    return `Este comando solo se puede usar en grupos!`
}

exports.adminOnly = () => {
    return `Solo los administradores del grupo pueden usar este comando!`
}

exports.notNsfw = () => {
    return `Los comandos NSFW no han sido activados!`
}

exports.nsfwOn = () => {
    return `Comando NSFW exitosamente *activado*!\nPonga *$nsfwmenu* para ver la lista de comandos.`
}

exports.nsfwOff = () => {
    return `Comando NSFW exitosamente *desactivado*!`
}

exports.addedGroup = (chat) => {
    return `Terima kasih telah mengundangku, para member *${chat.contact.name}*!\n\nKetik $rules terlebih dahulu ya~`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `------[ HALL OF SHAME ]------
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notPremium = () => {
    return `Maaf! Command ini khusus untuk user premium saja.`
}

exports.notAdmin = () => {
    return `Pengguna bukan admin!`
}

exports.adminAlready = () => {
    return `Tidak dapat promote pengguna yang merupakan admin!`
}

exports.botNotPremium = () => {
    return `Bot ini tidak mendukung command premium. Silakan hubungi pemilik bot ini.`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu!`
}

exports.ytLimit = () => {
    return `Size video terlalu besar!`
}

exports.ytFound = (result) => {
    return `Video ditemukan!\n\nTitle:\n${result.title}\n\nDescription:\n${result.desc}\n\nSize: ${result.size} / 50.0 MB\n\nMedia sedang dikirim, mohon tunggu...`
}

exports.fbFound = (result) => {
    return `Source:${result.source}`
}

exports.notRegistered = () => {
    return `Kamu belum terdafar di database!\n\nSilahkan Ketik /register namakalian | daerahkalian \n\n contohnya : /register alvio | bogor`
}

exports.notDaftar = () => {
    return `Kamu belum terdafar di database!\n\nSilakan Daftar dengan format:\n/daftar namakamu | kelaminmu\n\ncontoh= !daftar alvio | cowo`
}

exports.registered = () => {
    return `Selamat! Kamu telah terdaftar.\nKetik */rules* terlebih dahulu ya~`
}

exports.follow = () => {
return `Makasih ya sudah follow instagram owner , semoga tuhan memberkatimu ~ , kirim ulang apa yang mau dikerjakan oleh bot , terimakasih`
}

exports.followsudah = () => {
return `anda sudah menfollow ig owner`
}

exports.belomfollow = () => {
return `anda belum menfollow ig owner , silahkan follow terlebih dahulu\n*dan silahkan cek bio owner di instagram*\nhttps://www.instagram.com/alvio151/\n\n*INGAT CEK BIO IG OWNER*`
}
exports.registeredAlready = () => {
    return `Kamu sudah mendaftar sebelumnya.`
}

exports.levelNull = () => {
    return `Kamu belum memiliki level!`
}

exports.welcome = (event) => {
    return `Selamat datang @${event.who.replace('@c.us', '')}!\n\nSemoga betah terus di grup kami ya~`
}

exports.welcomeOn = () => {
    return `Fitur welcome berhasil *diaktifkan*!`
}

exports.welcomeOff = () => {
    return `Fitur welcome berhasil *dinonaktifkan*!`
}

exports.welcomeOnAlready = () => {
    return `Fitur welcome telah diaktifkan sebelumnya.`
}

exports.minimalDb = () => {
    return ` Perlu setidaknya 10 user yang memiliki level di database!`
}

exports.autoStikOn = () => {
    return `Fitur auto-stiker berhasil *diaktifkan*!`
}

exports.autoStikOff = () => {
    return `Fitur auto-stiker berhasil *dinonaktifkan*!`
}

exports.autoStikOnAlready = () => {
    return `Fitur auto-stiker telah diaktifkan sebelumnya.`
}
exports.afkOn = () => {
    return `Fitur AFK berhasil *diaktifkan*!`
}

exports.afkOn = (pushname, reason) => {
    return `Fitur AFK berhasil *diaktifkan*!\n\n➸ *Username*: ${pushname}\n➸ *Alasan*: ${reason}`
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK MODE 」*\n\nSssttt! Orangnya lagi afk, jangan diganggu!\n➸ *Alasan*: ${getReason}\n➸ *Sejak*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}

exports.playstore = (app_id, title, developer, description, price, free) => {
    return `➸ *Nama*: ${title}\n➸ *ID*: ${app_id}\n➸ *Developer*: ${developer}\n➸ *Gratis*: ${free}\n➸ *Harga*: ${price}\n➸ *Deskripsi*: ${description}`
}

exports.shopee = (nama, harga, terjual, shop_location, description, link_product) => {
    return `➸ *Nama*: ${nama}\n➸ *Harga*: ${harga}\n➸ *Terjual*: ${terjual}\n➸ *Lokasi*: ${shop_location}\n➸ *Link produk*: ${link_product}\n➸ *Deskripsi*: ${description}`
}

