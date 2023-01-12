const express = require("express");
const port = 8080;
const bcrypt = require('bcryptjs')
const user_model = require("./users_module");
const User = user_model.User;

const app = express();
app.use(express.json());

var cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
    res.send("Database active");
})
app.post('/ifUser', async (req, res) => {
    let email = req.body.email
    let result = await User.findOne({ email })
    res.send({ exists: (result) ? true : false })
})
app.post('/getUser', async (req, res) => {
    let { email, password } = req.body
    let result = await User.findOne({ email })
    if (result) {
        bcrypt.compare(password, result.password, function (err, result) {
            res.send({ status: (result) ? 'ok' : 'not ok' })
        })
    }
    else res.send({ status: 'not ok' })
})
app.post("/saveUser", async (req, res) => {
    let { name, email, password, role } = req.body
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async function (err, hash) {
            var data = { name: name, email: email, password: hash, role: role };
            let result = await User.create(data)
                .then((result) => {
                    console.log(result)
                    res.send({status:'ok'});
                })
                .catch(err=>{
                    res.send({status:'not ok'});
                });

        });
    });
})



app.listen(process.env.PORT || port, () => {
    console.log(`Listening on port ${port}`);
});