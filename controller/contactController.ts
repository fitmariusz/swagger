import { Request, Response } from 'express';

interface Contact {
    id: number;
    name: string;
    number: number;
}

let contacts: Contact[] = [
    {
        id: 1,
        name: "mariusz",
        number:1234567
    }
];

export const getContacts = (req: Request, res: Response) => {
    res.json(contacts);
};

export const addContact = (req: Request, res: Response) => {
    const { name, number } = req.body;
    const newContact: Contact = { id: contacts.length + 1, name, number };
    contacts.push(newContact);
    res.status(201).json(newContact);
};

export const deleteContact = (req: Request, res: Response) => {
    const { id } = req.params;
    contacts = contacts.filter(contact => contact.id !== parseInt(id));
    res.status(204).send();
};