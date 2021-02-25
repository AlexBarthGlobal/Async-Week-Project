const Sequelize = require('sequelize')
const db = require('./database')

module.exports = db.define('users', {
  googleId: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.STRING
  }
})

// module.exports = {
//   db,
//   User
// }
