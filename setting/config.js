/*

  -! Credits By ruzxxoffc
  https://wa.me/6288980698613
  
  -! Recode By KalStore Offc
  httos://wa.me/6283839153727

*/

const fs = require('fs')

// ========= Setting Owner ========= //
global.owner = "6287844155322@s.whatsapp.net"
global.versi = "2.2"

// ========= Setting Channel ========= //
global.namasaluran = "INFORMATION SCRIPT DITZYSTORE"
global.linksaluran = "https://whatsapp.com/channel/0029VainmEz0wajqVvaC6k1x"

// ========= Setting Status ========= //
global.status = true
global.welcome = true
global.antispam = true
global.autoread = true
global.prefa = ['','!','.',',','🐤','🗿']

// ========= Setting WM ========= //
global.packname = 'ditzystore'
global.author = 'ditzystore'


global.gcount = {
    prem : 500,
    user: 15
}

//limit
global.limitCount = 10,

//message 
global.mess = {
    group: "ngapain? khusus grup njrr",
    admin: "ngapain? khusus admin njrr",
    owner: "apalah, bukan premium",
    premium: "bukan user premium kntl",
    botadmin: "bot bukan admin",
    limited: "limitmu habis, kembali besok/sore nanti"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
