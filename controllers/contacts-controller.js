import Joi from "joi";

import contactsService from "../models/contacts.js";

import httpError from "../helpers/httpError.js";
import contactsAddScheme from "../schemes/contacts-schemes.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";

const getAllContacts = async (req, res) => {
  const result = await contactsService.getListContacts();
  res.json(result);
};

const getContactsById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsService.getContactById(contactId);
  if (!result) {
    throw httpError(404);
  }
  res.json(result);
};

const addContact = async (req, res) => {
  const { error } = contactsAddScheme.validate(req.body);
  if (error) {
    throw httpError(400, error.message);
  }
  const result = await contactsService.addContact(req.body);
  res.status(201).json(result);
};

const updateContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsService.updateContactById(contactId, req.body);
  if (!result) {
    throw httpError(404);
  }
  res.json(result);
};

const deleteContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsService.removeContact(contactId);
  if (!result) {
    throw httpError(404);
  }
  res.json({ message: `Contact deleted` });
};

export default {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactsById: ctrlWrapper(getContactsById),
  addContact: ctrlWrapper(addContact),
  updateContactById: ctrlWrapper(updateContactById),
  deleteContactById: ctrlWrapper(deleteContactById),
};
