const User = require('../models/userModel');
const ErrorResponse = require('../utilites/errorRes');

async function login(req, res, next) {
  console.log('in backend');
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return next(
        new ErrorResponse('Please provide both username and password', 400)
      );
    }

    const user = await User.findOne({ username });
    if (!user) {
      return next(new ErrorResponse('User not found', 404));
    }

    const isMatch = await user.checkPassword(password, user.password);
    if (!isMatch) {
      return next(new ErrorResponse('Incorrect password', 401));
    }

    res.status(200).json({
      success: true,
      user: user,
      token: user.getToken(),
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = { login };
