// Requerimos la librería de mongoose
const mongoose = require('mongoose');
// Requerimos Schema para construcción de un modelo
const Schema = mongoose.Schema;

// Definimos el schema de nuestro movie
const ManufacturersSchema = new Schema({
    id: {
        type: 'number'
    },
    name: {
        type: 'string'
    },
    foundation: {
        type: 'number'
    },
    country: {
        type: 'string'
    },
    campus: {
        type: 'string'
    },
    logo: {
        type: 'string'
    }
},
    {
        timestamps: true
    }
);

//Exportamos el schema
const Manufacturers = mongoose.model('manufacturers', ManufacturersSchema);

module.exports = Manufacturers;
