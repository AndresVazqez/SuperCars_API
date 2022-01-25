const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { connect } = require('./src/utils/database/db');

const manufacturers = require('./src/api/routes/manufacturers.routes');
const superCars = require('./src/api/routes/supercars.routes');

connect();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use('/public', express.static('public'));

app.use('/api', manufacturers);
app.use('/api', superCars);
app.use('/', (req, res, next) => {
    return res.json(documentation)
})


const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
    console.log(`listening on port 🏴󠁥󠁧󠁰󠁴󠁳󠁿: ${PORT}`)
});


// app.use((req, res, next) => {
//     setImmediate(() => {
//         next(new Error('Something went wrong'));
//     });
// });

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});