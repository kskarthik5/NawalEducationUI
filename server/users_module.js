const mongoose = require("mongoose");
const conn_str = "mongodb+srv://admin:admin@cluster0.awxdryi.mongodb.net/users?retryWrites=true&w=majority";
mongoose.connect(conn_str, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const userSchema = new mongoose.Schema({
    name: {type:String,required:true},
    email: {type:String,required:true,unique:true},
    password: {type:String,required:true},
    role: {type:String,required:true}
});

const User = mongoose.model('navalAcademyUsers', userSchema);

exports.User = User;