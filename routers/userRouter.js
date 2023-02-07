import express from "express";
import routes from "../routes";
import {
  changePassord,
  editProfile,
  userDetail,
  users,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassord, changePassord);
export default userRouter;
