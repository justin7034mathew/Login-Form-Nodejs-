const express = require("express")
const path = require("path")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.use(express.static("views"))

const emailDB = "justinmathew@gmail.com";
const passwordDB = '123';

app.post("/login", (req, res) => {
    const {email, password} = req.body
    console.log(req.body);

    if (email === emailDB && password === passwordDB) {
        res.sendFile(path.join(__dirname, "views", "userHomepage.html"))
    }else {
        res.send("Loggin failed")
    }
})

const userModel = mongoose.model("users", userSchema)

app.get("/user", (req, res) => {
    userModel.find({}).then((users) => {
        res.json(users)
    }).catch((err) => console.log(err))
})

const PORT = process.env.PORT | 3001
app.listen(PORT, () => console.log("Server is running"))

