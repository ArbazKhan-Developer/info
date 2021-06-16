const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/infoFormData',{useNewUrlParser: true, useUnifiedTopology:true}).then(()=>{
    console.log('connection successfull');
}).catch(()=>{
    console.log('connection failed');
});