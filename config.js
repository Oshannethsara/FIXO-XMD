const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID ||"xr1VVJgL#4uq6prNDHOuI1ZqEEtx0va4Y02WcNWnEUi48mNsoX6A",
MONGODB: process.env.MONGODB ||"mongodb://mongo:pPphhPWtIpFweBRlhKqmhigRvQlQkKsJ@switchyard.proxy.rlwy.net:43392",
};
