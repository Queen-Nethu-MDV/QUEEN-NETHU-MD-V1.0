const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "Enter your session ID",
  MONGODB: process.env.MONGODB || "mongodb://mongo:TcRCWZGNTzIKxnsUQvteZksjPiglffwf@switchyard.proxy.rlwy.net:46726",
  OWNER_NUM: process.env.OWNER_NUM || "94741648426",
};
