let database = require("../database");

let remindersController = {
  // Show a list of reminders
  list: (req, res) => {
    res.locals.page = "list";
    res.render('reminder/index', { reminders: database.cindy.reminders })
  },

  // Show a Create Reminder Page
  new: (req, res) => {
    res.locals.page = "new";
    res.render('reminder/create')
  },

  // Show the details of a Single Reminder
  listOne: (req, res) => {
    res.locals.page = "listOne";
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    if (searchResult != undefined) {
      res.render('reminder/single-reminder', { reminderItem: searchResult })
    } else {
      res.render('reminder/index', { reminders: database.cindy.reminders })
    }
  },

  // Create a reminder
  // ⚠️ TODO: Currently hardcoded to always create a reminder for Cindy only. You need to make this dynamic. 
  create: (req, res) => {
    let reminder = {
      id: database.cindy.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
      tags: req.body.tags.split(",")
    }
    database.cindy.reminders.push(reminder);
    res.redirect('/reminders');
  },

  // Show the Edit Reminder Page
  edit: (req, res) => {
    res.locals.page = "edit";
    reminderItem = database.cindy.reminders.find(val => val.id == req.params.id);

    if (reminderItem) {
      res.render('reminder/edit', {reminderItem: reminderItem});
    } else {
      res.redirect('/reminders/');
    }
  },
  
  // Edit the Reminder
  update: (req, res) => {
    indx = database.cindy.reminders.indexOf(database.cindy.reminders.find(rem => rem.id == req.params.id));
    database.cindy.reminders[indx].title = req.body.title;
    database.cindy.reminders[indx].description = req.body.description;
    database.cindy.reminders[indx].completed = req.body.completed == 'true' ? true : false;
    database.cindy.reminders[indx].tags = req.body.tags.split(",");
    res.redirect('/reminders');
  },

  // Delete the Reminder
  delete: (req, res) => {
    userReminders = database.cindy.reminders;
    reminderIndex = userReminders.indexOf(userReminders.find(val => val.id == req.params.id));

    userReminders.splice(reminderIndex, reminderIndex != -1 ? 1 : 0);
    res.redirect('/reminders');
  }
}

module.exports = remindersController;
