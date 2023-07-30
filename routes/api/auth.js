import express from "express";
import validateBody from "../../decorators/validateBody.js";
import usersSchemes from "../../schemes/users-schemes.js";
import authContoller from "../../controllers/auth-contoller.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(usersSchemes.userSignupSchema),
  authContoller.signup
);

authRouter.post(
  "/login",
  validateBody(usersSchemes.userSigninSchema),
  authContoller.signin
);

authRouter.post(
  "/logout",
  validateBody(usersSchemes.userSigninSchema),
  authContoller.signin
);

export default authRouter;
