import express from "express";
import contactsController from "../../controllers/contacts-controller.js";
import isEmptyBody from "../../middlewars/isEmptyBody.js";
import validateBody from "../../decorators/validateBody.js";
import contactsAddScheme from "../../schemes/contacts-schemes.js";

const router = express.Router();

router.get("/", contactsController.getAllContacts);

// router.get("/:contactId", contactsController.getContactsById);

router.post("/", isEmptyBody, contactsController.addContact);

// router.delete("/:contactId", contactsController.deleteContactById);

// router.put(
//   "/:contactId",
//   isEmptyBody,
//   validateBody(contactsAddScheme),
//   contactsController.updateContactById
// );

export default router;
