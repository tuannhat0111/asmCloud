const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'bxbnvupgjjjure',
    host: 'ec2-54-82-205-3.compute-1.amazonaws.com',
    database: 'd1ss9d2gcdcsak',
    password: 'ea02f176d522cc5402dead9dd5eb95f202719f1e0d59f4e2a9665f04993aa9f3',
    port: 5432,
});

const query = ` SELECT * FROM product
`;
pool.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    for (let row of res.rows) {
        console.log(row);
    }
    [pool].end();

});