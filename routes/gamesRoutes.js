const router = require('express').Router();

const db = require('../data/dummyData');

router.get('/', (req, res) => {
    try {
        const data = db;
        res.send(data);
    } 
    catch(err){
        res.status(500).send(err.message)
    }
})

router.post('/', (req, res) => {
    
})

module.exports = router;