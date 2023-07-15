import express from "express";
import Joi from "joi";

import contactsService from "../../models/contacts.js";

import { httpError } from "../../helpers/index.js";

const router = express.Router();

const contactsAddScheme = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": `Missing required name field` }),
  email: Joi.string()
    .required()
    .messages({ "any.required": `Missing required email field` }),
  phone: Joi.string()
    .required()
    .messages({ "any.required": `Missing required phone field` }),
});

router.get("/", async (req, res, next) => {
  try {
    const result = await contactsService.getListContacts();
    res.json(result);
  } catch (e) {
    next(e);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactsService.getContactById(contactId);
    if (!result) {
      throw httpError(404);
    }
    res.json(result);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = contactsAddScheme.validate(req.body);
    if (error) {
      throw httpError(400, error.message);
    }
    const result = await contactsService.addContact(req.body);
    res.status(201).json(result);
  } catch (e) {
    next(e);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactsService.removeContact(contactId);
    if (!result) {
      throw httpError(404);
    }
    res.json({ message: `Contact deleted` });
  } catch (e) {
    next(e);
  }
});

router.put("/:contactId", async (req, res, next) => {
  try {
    const { value, error } = contactsAddScheme.validate(req.body);
    if (JSON.stringify(value) === "{}") {
      throw httpError(400, "Missing fields");
    }
    if (error) {
      throw httpError(400, error.message);
    }
    const { contactId } = req.params;
    const result = await contactsService.updateContactById(contactId, req.body);
    if (!result) {
      throw httpError(404);
    }
    res.json(result);
  } catch (e) {
    next(e);
  }
});

export default router;
