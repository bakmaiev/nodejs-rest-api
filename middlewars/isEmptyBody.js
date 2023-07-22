import httpError from "../helpers/httpError.js";

const isEmptyBody = (req, res, next) => {
  const { length } = Object.keys(req.body);
  if (!length) {
    next(httpError(400, "Missing fields"));
  }
  next();
};

export default isEmptyBody;
