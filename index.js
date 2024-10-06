import express from "express"
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

var isUserAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));

function passwordCheck(req, res, next) {
  const password = req.body["password"];
  if (password === "ILoveProgramming") {
    userIsAuthorised = true;
  }
  next();
}
app.use(passwordCheck); 

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });




app.listen(3000, () =>{
    console.log("Server running on Port 3000!");
});

