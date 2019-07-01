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

router.post('/', async (req, res) => {
    try{
        if (req.body.title && req.body.genre){
            const gameTitles = db.map(game => game.title.toLowerCase())

            const checkDouble = gameTitles.includes(req.body.title.toLowerCase())

            if(checkDouble){
                res.status(405).json({message: "Duplicate title"})
            } else {
                db.push(req.body)
                res.status(201).send(req.body)
            }
        } else {
            res.status(422).json({message: "Must include title and genre"})
        }
    }
    catch(err){
        res.status(500).send(err.message)
    }
})

module.exports = router;