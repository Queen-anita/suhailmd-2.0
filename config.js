const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaGyP933bbVC7G0x0i2T";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaGyP933bbVC7G0x0i2T" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/M1BzE37.jpeg" || "https://i.imgur.com/M1BzE37.jpeg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© TOHIDKHAN" 


global.devs = "917849917350" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917849917350";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.imgur.com/M1BzE37.jpeg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "917849917350,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_42_11_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDUwLFxuICAgICAgICA1NSxcbiAgICAgICAgODgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTksXG4gICAgICAgIDExLFxuICAgICAgICA2OSxcbiAgICAgICAgNTksXG4gICAgICAgIDUzLFxuICAgICAgICA1NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM3LFxuICAgICAgICA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNixcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA2MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUzLFxuICAgICAgICA5MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTEzLFxuICAgICAgICA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTksXG4gICAgICAgIDk4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM2LFxuICAgICAgICAzMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIwLFxuICAgICAgICA1MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDQxLFxuICAgICAgICA3NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDEsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY4LFxuICAgICAgICA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDkwLFxuICAgICAgICA4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk5BNUFDUjlUMTNOeGZhc0wxMmROenRCM2tYYVFyWmlGK01YUVlUSCtDUW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInk3bGxSTTRyUmdxOUtVRTBGX3lsR0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTMwZmVjNWYtYzlkYi00MzMxLWI1ZWEtYzgwZGY0YTExNjc3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkxLFxuICAgICAgMjI2LFxuICAgICAgMjAxLFxuICAgICAgMTk4LFxuICAgICAgNTAsXG4gICAgICA0NyxcbiAgICAgIDgzLFxuICAgICAgMTQ5LFxuICAgICAgOTAsXG4gICAgICAxNCxcbiAgICAgIDEyOSxcbiAgICAgIDE3MCxcbiAgICAgIDUwLFxuICAgICAgNzUsXG4gICAgICAxMjUsXG4gICAgICAyNCxcbiAgICAgIDIyMyxcbiAgICAgIDE4OCxcbiAgICAgIDE3OCxcbiAgICAgIDQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OSxcbiAgICAgIDE4NCxcbiAgICAgIDUyLFxuICAgICAgNzQsXG4gICAgICAyMzMsXG4gICAgICAyNDMsXG4gICAgICAyNyxcbiAgICAgIDIzMyxcbiAgICAgIDI1MixcbiAgICAgIDgxLFxuICAgICAgNjYsXG4gICAgICAxLFxuICAgICAgMTY1LFxuICAgICAgMjA2LFxuICAgICAgMTk0LFxuICAgICAgMjYsXG4gICAgICAyMjksXG4gICAgICAxNjMsXG4gICAgICAyMjgsXG4gICAgICAxNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM1M2QkQ5RDlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQzOTA4MTUzNjoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmqvwnZq08J2QhvCdmrXwnZCLIPCdmq/wnZCFIPCdkIvwnZqw8J2QhvCdmq7wnZq7XCIsXG4gICAgXCJsaWRcIjogXCIxNjgzMzc0MDExODQ0NjI6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSi9OK3E0R0VOZlk1cmtHR0F3Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCNjZEeHM2S0Y3NmU3aG90c3BWL0doQkVoMWJnVVJxMzlPNkV2bVVXbWtRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRMYythOVlPRVZVckxyZG8wMHdMRC9raTFST3FXMkFseWtva2J4bFRVM3BTYUhTeFVjVUM1eU0ybmk3dmVsb21PNlZOUU9GMVJGazdWOFZpQkJkOURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlB4L2dUMFJsOFlaRDdydWRJM1RxT3JvZ2ZSaWVDZVRTWUVOYmVuazVrYjdwbUNaOTF5ajB1ZWYveGtpT1JKdUU2MWRjY0NNa0krZWZ3V2IzTVhucEFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQzOTA4MTUzNjoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxODMyOTIxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSGZQXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIZlAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2MzhPaGNrQkU1b0JtY2NJZ0Zkd0RHL0xBUWNnMXBlZ0lwUkRUdGdzazFFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MDkwOTA0NjIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzEyMDc5MTE1NTdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || " ᴘᴏᴡᴇʀᴇᴅ ʙʏ FAISAL KHAN ® 』" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "FAISAL KHAN",
  packname: process.env.PACK_NAME || "FAISAL KHAN",
  botname : process.env.BOT_NAME  || "FAISAL KHAN ",
  ownername:process.env.OWNER_NAME|| "FAISAL KHAN",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "TOHID"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
