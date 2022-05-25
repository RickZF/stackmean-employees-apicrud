const mongoose = require("mongoose");

const URI = "mongodb://localhost/stackmean-employees-crud";

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then((db)=> console.log("Db is connected"))
.catch((err)=>console.error(err));

module.exports = mongoose;