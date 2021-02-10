const router = require('express').Router();
module.exports = router
const {Campus, Student} = require('../db')

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

router.get('/:id', async (req, res, next) => {
    const id = req.params.id
    try {
        const campusAndItsStudents = await Campus.findAll({
            where: {
                id: id
            },
            include: {
                model: Student,
                required: false,
                where: {
                    campusId: id
                }             
            }
        })
        res.json(campusAndItsStudents)
    } catch (err) {
        res.status(400).send('error')
    }
})