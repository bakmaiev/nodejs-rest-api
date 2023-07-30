import express from "express";
import contactsController from "../../controllers/contacts-controller.js";
import isEmptyBody from "../../middlewars/isEmptyBody.js";
import validateBody from "../../decorators/validateBody.js";
import isValidId from "../../middlewars/isValidId.js";
import contactsSchemes from "../../schemes/contacts-schemes.js";
import autenticate from "../../middlewars/authenticate.js";

const contactsRouter = express.Router();

contactsRouter.use(autenticate);

contactsRouter.get("/", contactsController.getAllContacts);

contactsRouter.get(
  "/:contactId",
  isValidId,
  contactsController.getContactsById
);

contactsRouter.post(
  "/",
  isEmptyBody,
  validateBody(contactsSchemes.contactsAddScheme),
  contactsController.addContact
);

contactsRouter.delete(
  "/:contactId",
  isValidId,
  contactsController.deleteContactById
);

contactsRouter.put(
  "/:contactId",
  isValidId,
  isEmptyBody,
  validateBody(contactsSchemes.contactsAddScheme),
  contactsController.updateContactById
);

contactsRouter.patch(
  "/:contactId/favorite",
  isValidId,
  isEmptyBody,
  validateBody(contactsSchemes.contactUpdateFavoriteScheme),
  contactsController.updateFavorite
);

export default contactsRouter;
