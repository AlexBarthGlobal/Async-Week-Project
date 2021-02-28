// 
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

// const crypto = require('crypto');
// const _ = require('lodash')

// const User = db.define('users', {
//   googleId: Sequelize.STRING,
//   email: {
//     type: Sequelize.STRING,
//     validate: {
//       isEmail: true
//     }
//   },
//   password: {
//     type: Sequelize.STRING
//   },
//   imageUrl: {
//     type: Sequelize.STRING
//   },
//   salt: {
//     type: Sequelize.STRING
//   }
// }, {
//   hooks: {
//     beforeCreate: setSaltAndPassword,
//     beforeUpdate: setSaltAndPassword
//   }
// });

// // instance methods
// User.prototype.correctPassword = function (candidatePassword) {
//   return this.Model.encryptPassword(candidatePassword, this.salt) === this.password;
// };

// User.prototype.sanitize = function () {
//   return _.omit(this.toJSON(), ['password', 'salt']);
// };

// // class methods
// User.generateSalt = function () {
//   return crypto.randomBytes(16).toString('base64');
// };


// User.encryptPassword = function (plainText, salt) {
//   const hash = crypto.createHash('sha1');
//   hash.update(plainText);
//   hash.update(salt);
//   return hash.digest('hex');
// };

// function setSaltAndPassword (user) {
//   if (user.changed('password')) {
//     user.salt = User.generateSalt()
//     user.password = User.encryptPassword(user.password, user.salt)
//   }
// };

// module.exports = User;