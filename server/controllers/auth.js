const User = require("../model/userSchema");
const jwtt = require("jsonwebtoken");
const { expressjwt: jwt } = require("express-jwt");

//signup
exports.signUp = (req, res) => {
  //console.log(req.body);
  console.log("ololloloolol");
  const { name, email, password, address, phone } = req.body;
  if (!name || !email || !password || !address || !phone) {
    console.log("after if");
    return res.status(400).json({
      error: "All fields are required!",
    });
  }
  console.log("hello");
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    user.salt = undefined;
    user.hashed_password = undefined;
    res.status(200).json({
      user,
    });
  });
};

exports.signIn = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res
        .json({
          error: "User with this email doesn't exist, please SignUp",
        })
        .status(400);
    }

    //if user is found, make sure the email and password match

    //create authenticate method in user model
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and password doesn't match!",
      });
    }

    //generate a signed token with user id and secret
    const token = jwtt.sign({ _id: user._id }, "coding");

    //persist the token as 't' in cookie with expiry date
    res.cookie("t", token, { expire: new Date().getMinutes() + 1 });

    //return response with user and token to frontend client
    const { _id, name, email, role, phone, address } = user;
    return res.json({
      token,
      user: {
        _id,
        email,
        name,
        phone,
        address,
        role,
      },
    });
  });
};