const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233555175090";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "True"
global.save_status = process.env.AUTO_SAVE_STATUS || "True"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_05_04_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDMxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjU0LFxuICAgICAgICA1NyxcbiAgICAgICAgNjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDgxLFxuICAgICAgICA3MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDc4LFxuICAgICAgICA5MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDksXG4gICAgICAgIDM2LFxuICAgICAgICAxODMsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDk5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjExLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTUsXG4gICAgICAgIDk0LFxuICAgICAgICA5MixcbiAgICAgICAgOCxcbiAgICAgICAgMCxcbiAgICAgICAgODUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMTczLFxuICAgICAgICA1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA0NCxcbiAgICAgICAgMixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNixcbiAgICAgICAgMTE1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDcxLFxuICAgICAgICA5MixcbiAgICAgICAgNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODksXG4gICAgICAgIDEwMyxcbiAgICAgICAgOSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDg2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGankwSkhDckdPMEhnNTNweWdCajY1dnZ3empBakYzY1plMzNrMEpMVWhFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJUUlViTmloUFF3S3JtRzl4ZDNDeFl3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjVlMjdiYjYwLTYxZmQtNDg1YS04YzE2LTNlOGYyNTdkNDM3ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDksXG4gICAgICAzNCxcbiAgICAgIDE0MSxcbiAgICAgIDI0NCxcbiAgICAgIDk3LFxuICAgICAgMTAxLFxuICAgICAgOTcsXG4gICAgICA2NCxcbiAgICAgIDY1LFxuICAgICAgMjA1LFxuICAgICAgMTY0LFxuICAgICAgMjIxLFxuICAgICAgMTYyLFxuICAgICAgMzgsXG4gICAgICAxMTAsXG4gICAgICA4NCxcbiAgICAgIDExMCxcbiAgICAgIDkxLFxuICAgICAgMTMsXG4gICAgICAyMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAyLFxuICAgICAgMTExLFxuICAgICAgMTI3LFxuICAgICAgMTY1LFxuICAgICAgMTAzLFxuICAgICAgMjMxLFxuICAgICAgNDYsXG4gICAgICAxNzIsXG4gICAgICA0NixcbiAgICAgIDEwNCxcbiAgICAgIDE0NSxcbiAgICAgIDk0LFxuICAgICAgMyxcbiAgICAgIDksXG4gICAgICA1LFxuICAgICAgNjIsXG4gICAgICAxNjksXG4gICAgICAzOCxcbiAgICAgIDI0NixcbiAgICAgIDQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlY3UkVSWEI3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1NTUxNzUwOTA6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzNzIyNDU0MTI2NzEyOjI5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKAonx84oCi8J+YiPCdla/wnZaK8J2Wm/Cdlo7wnZaRJ/Cdlpgg8J2VvvCdlpTwnZaTLi7imIbwn6W68J+SleKAonx84oCiXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTk9Uek1JRkVOS3lvN0VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5eE9WNlp3amtEd0Jvc2ZsUk5ZT1QxZUwvSEhSUjlnSDNvQnprU1hoZDBnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImdJMndiWUtXZC9MbzRGcjI3cmhYdlFIQnIrOFI2elZwNzVJVmQ2MHFjR3VzRDNLOGV2dkZ2b3lIRnlBT3IydGhKVXlGam1yUmNpOGZsUjExazZQVkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjRWZmZ1SDVFU1pBME5QbFA2dDlmNHcvNUtBUjdtR0FXaVVZVStKSDlwQmtkTGZoNVB5eSs4eXJtbk9aOGQrLzQwV3pMTHpXMnc5cGtpQnc4ZCtiU2hRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzU1NTE3NTA5MDoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTM5NTMxMDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEYVFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURhUS5qc29uIjogIntcImtleURhdGFcIjpcIitqVVFzKzRwY1JaMklZQkFMMkRWMUVVZmtacVI4K0R3RjdBaGZ3cFNURDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ4MTgzNzAwNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Acostic",
  packname: process.env.PACK_NAME || "•||•𝕯𝖊𝖛𝖎𝖑'𝖘 𝕾𝖔𝖓..☆😈•||•",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
