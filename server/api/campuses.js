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

router.post('/addcampus', async (req, res, next) => {
    //const campusData = req.body
    console.log(req.body)
    try {   
        res.status(201).send(await Campus.create(req.body));
    } catch (err) {
        res.status(400).send('error')
    }
})

router.delete('/:id', async (req, res, next) => {
    console.log(req.body)
    try {
        const campusToDelete = await Campus.findByPk(req.params.id);
        await campusToDelete.destroy()
        res.send(campusToDelete)
    } catch (err) {
        res.status(400).send('error')
    }
})