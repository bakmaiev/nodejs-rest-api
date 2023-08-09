import express from "express";
import validateBody from "../../decorators/validateBody.js";
import usersSchemes from "../../schemes/users-schemes.js";
import authContoller from "../../controllers/auth-contoller.js";
import authenticate from "../../middlewars/authenticate.js";
import upload from "../../middlewars/upload.js";
import ctrlWrapper from "../../decorators/ctrlWrapper.js";

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

authRouter.get("/current", authenticate, authContoller.getCurrent);

authRouter.post("/logout", authenticate, authContoller.signout);

authRouter.patch(
  "/",
  authenticate,
  validateBody(usersSchemes.userSubUpdateSchema),
  authContoller.subUpdate
);

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  authContoller.avatarUpdate
);

export default authRouter;
