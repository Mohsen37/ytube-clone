import express from "express";
import routes from "../routes";
import {
  deleteVideo,
  editVideo,
  getUpload,
  postUpload,
  videoDetail,
  videos,
} from "../controllers/videoController";

// videoRouter.get(routes.videos, videos);
const videoRouter = express.Router();
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
