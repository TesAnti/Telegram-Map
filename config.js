var config = {} 


// your telegram API credentials
// please go to https://my.telegram.org to create your API credentials
config.telegramApiId = 123;
config.telegramApiHash = "qweqweqwe";


// server settings
config.hostname = process.env.HOST || "0.0.0.0";
config.port = process.env.PORT || 3000;


module.exports = config;
