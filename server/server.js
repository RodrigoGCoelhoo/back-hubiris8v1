const express = require("express");
const apiRouter = require("./routes");

const app = express();

app.use("/hubapi", apiRouter );

app.use(express.json());

app.listen(process.env.PORT || '3000', () => {

    console.log("Server is running on: ${process.env.PORT || '3000'}");

})