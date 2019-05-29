import express from 'express';
// import { Module } from 'module';
export var router = express.Router();

    router.use(function timeLog(req, res, next){
        console.log('Time ', Date.now());
        next()
    });

    router.get('/', function(req, res){
        res.send("In the Dashboard now...!");
    })

    router.get("/Favourites", (req, res) => {
        res.send("In the favourites now...!");
    })

module.exports = router;