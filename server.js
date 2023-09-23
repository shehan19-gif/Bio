const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.static('public', {index: "main.html"}));

const PORT = process.env.PORT || 3001;

app.get("/message", (req, res) => {
    res.status(200).json({SERVICE_ID: process.env.SERVICE_ID, TEMPLATE_ID: process.env.TEMPLATE_ID});
})

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));