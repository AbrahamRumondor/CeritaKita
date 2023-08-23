import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/Home", (req, res) => {
    console.log(`/Home`);

    res.render("home.ejs");
})

app.listen(port, () => {
    console.log(`project successfully executed on ${port}`);
})