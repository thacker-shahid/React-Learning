const mongoose = require('mongoose');
const connection_string = 'mongodb://localhost:27017/'

function connectToMongo (){
    mongoose.connect(connection_string)
        .then(()=>
            console.log("DB Connected")
        ).catch((e)=>
            console.log(e.message)
        )
}
module.exports = connectToMongo;