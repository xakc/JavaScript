const Contact = require('./models/Contact');

let phonebook = [];

 function addContact(name,number ) {
	let contact = new Contact(name,number);
	phonebook.push(contact);
	
 }

 function getContacts(){
	 return phonebook.splice();
 }

 module.exports = {
	 addContact: addContact,
	 getContacts: getContacts
 }