var express = require('express');
var router = express.Router();


const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'bxbnvupgjjjure',
    host: 'ec2-54-82-205-3.compute-1.amazonaws.com',
    database: 'd1ss9d2gcdcsak',
    password: '123456',
    port: 5432,
});

/* GET home page. */
router.get('/', function(req, res, next) {

    pool.query('SELECT * FROM PRODUCT', (err, res) => {
        console.log(err, res)
        pool.end()
    })
    res.render('index', { title: 'Express' });
});

module.exports = router;