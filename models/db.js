// Connection to the Mongo DB

const mongoose = require('mongoose');


// For Connecting we need to call .connect. So it opens the default mongoose connection. 
//1st paramter is 'URL' and 2nd one is 'useNewUrlParser' . Need to set a boolean value
// We need to add the this file inside root file (app.js)

mongoose.connect('mongodb://localhost:27017/products', {useNewUrlParser: true}, (err) =>{
    if(!err){
        console.log('MongoDB Connection established');
    }
    else{
        console.log('Couldnt establish MongoDB Connection');
    }

});

// We need to define the model here (collection created in Database)

require('./product.model');