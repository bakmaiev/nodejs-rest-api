import ctrlWrapper from "../decorators/ctrlWrapper.js";
import httpError from "../helpers/httpError.js";
import User from "../models/user.js";

const { JWT_SECRET } = process.env;

const autenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer ") {
    throw httpError(401);
  }
  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(id);
    if (!user) {
      throw httpError(401);
    }
    next();
  } catch (e) {
    throw httpError(401, e.message);
  }
};

export default ctrlWrapper(autenticate);
