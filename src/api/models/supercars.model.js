const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SuperCarsSchema = new Schema({

    id: {
        type: 'number'
    },
    model: {
        type: 'string'
    },
    year: { 
        type: 'number'
    },
    engine:{ 
        type: 'string'
    },
    hp:{
        type:'string'
    },
    img: {
        type: 'string'
    },
    
},
    {
        timestamps: true
    }
);

const SuperCars = mongoose.model("superCars", SuperCarsSchema);
module.exports = SuperCars;