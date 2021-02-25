const router = require('express').Router()
const passport = require('passport')
const { User } = require('../db')
module.exports = router
const {CLIENT_ID, CLIENT_SECRET, CALLBACK_URL} = require('../../secrets')

router.get('/', passport.authenticate('google', { scope: 'email' }));

router.get('/callback', 
    passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/'
    })
)

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
passport.use(
  new GoogleStrategy({
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL
  },
  (token, refreshToken, profile, done) => {
   const info = {
       email: profile.emails[0].value,
       imageUrl: profile.photos ? profile.photos[0].value : undefined
   }
   User.findOrCreate({
       where: {googleId: profile.id},
       defaults: info
   })
   .spread((user) => {
       done(null, user)
   })
   .catch(done)
  })
)

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findByPk(id)
      // will mean that `req.user` is equal to the user we just found
      done(null, user)
    } catch (error) {
      done(error)
    }
  })