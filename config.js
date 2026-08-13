const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Avishkanimsara/Akash-MD/blob/main/images/file_00000000781481faaec18b3900b6ac11.png",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 AKASH-MD Is Alive Now😍*",
BOT_OWNER: '94776121326',  // Replace with the owner's phone number



};
