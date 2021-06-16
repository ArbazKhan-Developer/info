var mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    subject:{
        type: String
    },
    message:{
        type: String
    }
})

let Formdata = mongoose.model('Formdata',schema);

module.exports = Formdata;