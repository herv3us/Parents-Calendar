const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please enter a username'],
    unique: true,
  },
  firstName: {
    type: String,
    required: [true, 'Please enter a first name'],
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minLength: [8, 'Password needs to be at least 8 characters long'],
  },
});

// Run this function before user is saved/re-saved
userSchema.pre('save', async function (next) {
  const saltRounds = 10;

  // if the password wasn't modified, exit the function. Otherwise it would hash the already hashed password
  if (!this.isModified('password')) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, saltRounds);
  next();
});

// check if the userPassword matches with the enterd Password.
userSchema.methods.checkPassword = function (enteredPass, userPass) {
  return bcrypt.compare(enteredPass, userPass);
};

userSchema.methods.getToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT_SECRET);
};

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password;
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
