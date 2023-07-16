import express from "express";
import contactsController from "../../controllers/contacts-controller.js";
const router = express.Router();

router.get("/", contactsController.getAllContacts);

router.get("/:contactId", contactsController.getContactsById);

router.post("/", contactsController.addContact);

router.delete("/:contactId", contactsController.deleteContactById);

router.put("/:contactId", contactsController.updateContactById);

export default router;
