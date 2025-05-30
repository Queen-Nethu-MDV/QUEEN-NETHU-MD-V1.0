const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "Enter your session ID",
  OWNER_NUM: process.env.OWNER_NUM || "9470xxxxxxx",
  PREFIX: process.env.PREFIX || ".",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/B2gnQ2rm/IMG-20250216-WA0140.jpg",
  
};
