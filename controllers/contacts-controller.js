import Contact from "../models/contact.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";
import httpError from "../helpers/httpError.js";

const getAllContacts = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};

// const getContactsById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contactsService.getContactById(contactId);
//   if (!result) {
//     throw httpError(404);
//   }
//   res.json(result);
// };

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

// const updateContactById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contactsService.updateContactById(contactId, req.body);
//   if (!result) {
//     throw httpError(404);
//   }
//   res.json(result);
// };

// const deleteContactById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contactsService.removeContact(contactId);
//   if (!result) {
//     throw httpError(404);
//   }
//   res.json({ message: `Contact deleted` });
// };

export default {
  getAllContacts: ctrlWrapper(getAllContacts),
  // getContactsById: ctrlWrapper(getContactsById),
  addContact: ctrlWrapper(addContact),
  // updateContactById: ctrlWrapper(updateContactById),
  // deleteContactById: ctrlWrapper(deleteContactById),
};
