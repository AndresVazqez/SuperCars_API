const express = require('express');
const router = express.Router();

const ManufacturersSchema = require('../models/manufacturers.model');

router.route('/manufacturers').get(async (req, res) => {
    const manufacturers = await ManufacturersSchema.find();
    res.status(200).json({res});
});

//----------REPETIDO---------//
// router.route(' manufacturers').get(async (req, res) => {
//     const manufacturers = await ManufacturersSchema.find().populate('players');
//     res.status(200).json({
//         message: 'Teams',
//         result: manufacturers
//     })
// });

router.route('/manufacturers/:id').get((req, res, next) => {
    ManufacturersSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                message: 'Manufacturers Detail',
                result: data
            })
        }
    });
});



router.post('/manufacturers', (req, res, next) => {
    const manufacturers = new ManufacturersSchema({
        id: req.body.id,
        name: req.body.name,        
        foundation: req.body.foundation,
        country: req.body.country,
        campus: req.body.campus,        
        logo: req.body.logo,       
        
    });
    manufacturers.save().then((response) => {
        res.status(201).json({
            message: 'we have a new manufacturers',
            result: response
        });
    }).catch(err => {
        res.status(500).json({
            error: err
        })
    })
});

module.exports = router;