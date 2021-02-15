const router = require('express').Router();
module.exports = router
const {Student} = require('../db')

router.get('/', async (req, res, next) => {
    try {
        const allStudents = await Student.findAll()
        res.send(allStudents)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    const id = req.params.id
    try {
        const studentAndTheirCampus = await Student.findAll({
            where: {
                id: id
            },
        })
        if (!studentAndTheirCampus.length) throw Error
        res.json(studentAndTheirCampus)
    } catch (err) {
        next(err)
    }
})

router.post('/addstudent', async (req, res, next) => {
    console.log(req.body)
    try {   
        res.status(201).send(await Student.create(req.body));
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    console.log(req.body)
    try {
        const studentToDelete = await Student.findByPk(req.params.id);
        await studentToDelete.destroy()
        res.send(studentToDelete)
    } catch (err) {
        next(err)
    }
})

router.put('/edit/:id', async (req, res, next) => {
    console.log(req.body)
    try {
        const studentToUpdate = await Student.findByPk(req.params.id)
        res.send(await studentToUpdate.update(req.body));
    } catch (err) {
        next(err)
    }
})

router.put('/unregister/:id', async (req, res, next) => {
    console.log(req.params.id)
    try {
       await Student.update(
            {campusId: null},
            {where: {
                id: req.params.id
            }}
        )
        const unregisteredStudent = await Student.findByPk(req.params.id)
        res.send(unregisteredStudent)
    } catch (err) {
        next(err)
    }
})

router.use((req, res) => {
    res.status(404).send('404');
})

router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('500 server error')
  })