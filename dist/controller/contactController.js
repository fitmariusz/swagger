"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContact = exports.addContact = exports.getContacts = void 0;
let contacts = [
    {
        id: 1,
        name: "mariusz",
        number: 1234567
    }
];
const getContacts = (req, res) => {
    res.json(contacts);
};
exports.getContacts = getContacts;
const addContact = (req, res) => {
    const { name, number } = req.body;
    const newContact = { id: contacts.length + 1, name, number };
    contacts.push(newContact);
    res.status(201).json(newContact);
};
exports.addContact = addContact;
const deleteContact = (req, res) => {
    const { id } = req.params;
    contacts = contacts.filter(contact => contact.id !== parseInt(id));
    res.status(204).send();
};
exports.deleteContact = deleteContact;
