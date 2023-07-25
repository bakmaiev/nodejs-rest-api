import express from "express";
import contactsController from "../../controllers/contacts-controller.js";
import isEmptyBody from "../../middlewars/isEmptyBody.js";
import validateBody from "../../decorators/validateBody.js";
import isValidId from "../../middlewars/isValidId.js";
import contactsSchemes from "../../schemes/contacts-schemes.js";

const router = express.Router();

router.get("/", contactsController.getAllContacts);

router.get("/:contactId", isValidId, contactsController.getContactsById);

router.post(
  "/",
  isEmptyBody,
  validateBody(contactsSchemes.contactsAddScheme),
  contactsController.addContact
);

router.delete("/:contactId", isValidId, contactsController.deleteContactById);

router.put(
  "/:contactId",
  isValidId,
  isEmptyBody,
  validateBody(contactsSchemes.contactsAddScheme),
  contactsController.updateContactById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  isEmptyBody,
  validateBody(contactsSchemes.contactUpdateFavoriteScheme),
  contactsController.updateFavorite
);

export default router;
