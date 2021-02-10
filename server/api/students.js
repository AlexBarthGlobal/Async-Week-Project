const router = require('express').Router();
module.exports = router
const {Student} = require('../db')

// router.get('/', (req, res, next) => {
//     res.send("students route")
// })

router.get('/', async (req, res, next) => {
    try {
        const allStudents = await Student.findAll()
        res.send(allStudents)
    } catch (err) {
        res.status(400).send('error')
    }
})