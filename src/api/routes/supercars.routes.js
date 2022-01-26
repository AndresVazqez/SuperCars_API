const express = require('express');
const router = express.Router();

const SuperCarsSchema = require('../models/supercars.model');

router.route('/supercars').get((req, res) => {
    SuperCarsSchema.find((err, response) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json(response);
        }
    })
});


router.route('/supercars/:id').get((req, res, next) => {
    SuperCarsSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(data)
        }
    });
});


router.post('/supercars', (req, res, next) => {
    const supercars = new SuperCarsSchema({
        id: req.body.id,
        model: req.body.model,
        year: req.body.year,
        engine: req.body.engine,
        hp: req.body.hp,
        img: req.body.img,
    });
    supercars.save().then((response) => {
        res.status(201).json({
            message: 'Tenemos un nuevo cars!',
            result: response
        });
    }).catch(err => {
        res.status(500).json({
            error: err
        })
    })
});

module.exports = router;