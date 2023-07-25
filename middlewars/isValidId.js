import { isValidObjectId } from "mongoose";
import httpError from "../helpers/httpError.js";

const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    return next(httpError(400, `${contactId} is not a valid`));
  }
  next();
};

export default isValidId;
