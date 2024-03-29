const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors()); // allow all cros origins

module.exports ={app}