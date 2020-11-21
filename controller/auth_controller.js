let database = require("../database");


let authController = {
  login: (req, res) => {
    res.locals.page = "login"
    res.render('auth/login')
  },

  register: (req, res) => {
    let userEmail = req.query.email;
    let email = {userEmail: userEmail};
    res.locals.page = "register"
    res.render('auth/register', email)
  },

  loginSubmit: (req, res) => {
    
    res.redirect('/reminders')
  },

  registerSubmit: (req, res) => {
    
    res.redirect('/reminders')
  }
}

module.exports = authController;
