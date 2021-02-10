const router = require('express').Router();
module.exports = router
const {Campus} = require('../db')

router.get('/', (req, res, next) => {
    res.send("campuses route")
})