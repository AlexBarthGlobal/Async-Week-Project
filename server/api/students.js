const router = require('express').Router();
module.exports = router
const {Student} = require('../db')

router.get('/', (req, res, next) => {
    res.send("students route")
})