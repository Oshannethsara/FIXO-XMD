const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID ||"l30xRKYJ#Wgl7_Z-1qtd7JNdseqGpzAQmlEltFyAN6u-18Eg3f-k",
MONGODB: process.env.MONGODB ||"mongodb://mongo:pPphhPWtIpFweBRlhKqmhigRvQlQkKsJ@switchyard.proxy.rlwy.net:43392",
};
