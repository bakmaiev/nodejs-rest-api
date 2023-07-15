import fs from "fs/promises";
import { nanoid } from "nanoid";
import path from "path";

const contactsPath = path.resolve("db", "contacts.json");

const getListContacts = async () => {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
};

const getContactById = async (id) => {
  const contacts = await getListContacts();
  const foundContact = contacts.find((contact) => contact.id === id);
  return foundContact || null;
};

const addContact = async (name, email, phone) => {
  const contacts = await getListContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

const removeContact = async (id) => {
  const contacts = await getListContacts();
  const deletedContact = contacts.find((contact) => contact.id === id);
  if (deletedContact) {
    const updatedContacts = contacts.filter(
      (contact) => contact !== deletedContact
    );
    await fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
    return deletedContact || null;
  }
};

export const updateContactById = async (id, name, email, phone) => {
  const contacts = await getListContacts();
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index === -1) {
    return null;
  }
  contacts[index] = { id, name, email, phone };
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

  return contacts[index];
};

export default {
  getListContacts,
  getContactById,
  addContact,
  removeContact,
  updateContactById,
};
