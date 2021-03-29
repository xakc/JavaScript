const phonebook = require('../phonebook');

module.exports = {
  index: (req, res) => {
    res.render('index');
  },
  addPhonebookPost:(req, res) => {
    let name = req.body.name;
    let number = req.body.number;


    phonebook.addContact(res);
  }
}