const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG  || "https://ibb.co/zVZgCyyx" ,
ALIVE_MSG: process.env.ALIVE_MSG || "HEY I AM FIXO XMD I AM ALIVE NOW",
AUTO_READ_STATUS: process.env.AUTO_STATUS_READ ||"true",
};
