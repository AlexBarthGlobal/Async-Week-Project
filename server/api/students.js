const router = require('express').Router();
module.exports = router
const {Student, Campus} = require('../db')

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

router.get('/:id', async (req, res, next) => {
    const id = req.params.id
    try {
        const studentAndTheirCampus = await Student.findAll({
            where: {
                id: id
            },
            // include: {
            //     model: Campus,
            //     where: {
            //         id: id
            //     }             
            // }
        })
        res.json(studentAndTheirCampus)
    } catch (err) {
        res.status(400).send('error')
    }
})