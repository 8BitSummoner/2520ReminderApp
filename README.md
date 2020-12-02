# 2520ReminderApp
## Group Members
- Jaskaran Saini
- Stella Yu
- Thomas de Zwart
- Zachary Chang
## Incomplete Tasks
### Sprint 3
- Subtask viewing in main reminder list
- Subtask viewing in individual reminder view
- Subtask and tag editing on edit page
- Session support
  - `Use cookie-based sessions via Node middleware "cookie-session"`
- Fake authentication infrastructure
  - `Add additional fields to users in our fake database`
  - `Implement an authCheck function that we can apply to appropriate pages`
  - `Hook up existing login and register pages to our database`
### Sprint 4
- "Registered Users" page
  - `Setting a registered user page for users after they sign up their account.`
- Adding friends
  - `Use a function to add friends into the database (store them in friend field which could be an array for each user)`
- Removing friends
  - `Use a function to remove friends from the database (remove them from the user's array of friends)`
- User profile picture editing
  - `Add field to store profile picture url`
- Friends' profile pictures appearing on their reminders
  - `Use stored profile picture for each friend`
- Viewing friend's reminders in main reminder list
  - `Iterate through friends array and update reminder list with their reminders`
  - `Could be either implemented as two separate text areas (one for the user's reminders and one for friends) or one combined reminder list`
## Setup
Clone the repo, install the dependencies, and run with nodemon!
```bash
git clone https://github.com/8BitSummoner/2520ReminderApp.git
cd 2520ReminderApp
```
```bash
npm install
npm start
```
