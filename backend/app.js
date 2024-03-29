const path = require('path')
const cors = require("cors");
const express = require("express");
const app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors()); // allow all cros origins

module.exports ={app}