const express = require("express");
const apiRouter = require("./routes");
const cors = require("cors");

const app = express();

app.use("/hubapi", apiRouter );

app.use(express.json());

app.use(cors({
    origin: '*'
}));

app.listen(process.env.PORT || '3001', () => {

    console.log("Server is running on: ${process.env.PORT || '3000'}");

})