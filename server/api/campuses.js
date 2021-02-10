const router = require('express').Router();
module.exports = router
const {Campus} = require('../db')

// router.get('/', (req, res, next) => {
//     res.send("campuses route")
// })

router.get('/', async (req, res, next) => {
    try {
        const allCampuses = await Campus.findAll()
        res.send(allCampuses)
    } catch (err) {
        res.status(400).send('error')
    }
})
