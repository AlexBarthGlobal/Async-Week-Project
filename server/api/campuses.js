const router = require('express').Router();
module.exports = router
const {Campus, Student} = require('../db')

router.get('/', async (req, res, next) => {
    try {
        const allCampuses = await Campus.findAll()
        res.send(allCampuses)
    } catch (err) {
        next(err)
    }
});

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
        next(err)
    };
});

router.post('/addcampus', async (req, res, next) => {
    console.log(req.body)
    try {   
        res.status(201).send(await Campus.create(req.body));
    } catch (err) {
        next(err)
    };
});

router.delete('/:id', async (req, res, next) => {
    console.log(req.body)
    try {
        const campusToDelete = await Campus.findByPk(req.params.id);
        await campusToDelete.destroy()
        res.send(campusToDelete)
    } catch (err) {
        next(err)
    };
});

router.put('/edit/:id', async (req, res, next) => {
    console.log(req.body)
    try {
        const campusToUpdate = await Campus.findByPk(req.params.id)
        res.send(await campusToUpdate.update(req.body));
    } catch (err) {
        next(err)
    };
});

router.use((req, res) => {
    res.status(404).send('404');
})

router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('500 error')
})