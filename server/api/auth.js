const router = require('express').Router();
const { User } = require('../db');
module.exports = router;

router.get('/me', async (req, res, next) => {
  try {
    console.log(req.session)
    if (!req.session.passport) {
      res.sendStatus(401);
    } else {
      const user = await User.findByPk(req.session.passport.user);
      if (!user) {
        res.sendStatus(401);
      } else {
        res.json(user);
      }
    }
  } catch (error) {
    next(error);
  }
});

router.post('/signup', async (req, res, next) => {
  try {
    const exists = await User.findOne({
      where: {
        email: req.body.email
      }
    })
    if (exists) {
      const err = new Error('Username exists already!')
      err.status = 401
      throw err;
    } else {
      const user = await User.create(req.body);
      if (user) {
        req.login(user, (err) => err ? next(err) : res.json(user))
      } else {
        const err = new Error('Error creating user')
        err.status = 401
        throw err
      }
    };
  } catch (err) {
    next(err)
  }
})

router.put('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    })
    if (user) {
      req.login(user, (err) => err ? next(err) : res.json(user))
    } else {
      const err = new Error('Incorrect email or password!')
      err.status = 401
      throw err
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/logout', (req, res, next) => {
  req.logout()
  req.session.destroy((err) => {
    if (err) return next(err)
    res.status(204).end();
  })
})

router.use('/google', require('./oauth'))