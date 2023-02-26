import { videos as videosDB } from "../db";
import routes from "../routes";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videosDB });
};

export const search = (req, res) => {
  const {
    query: { keyword },
  } = req;
  res.render("search", { pageTitle: "search", keyword, videosDB });
};

export const videos = (req, res) =>
  res.render("videos", { pageTitle: "videos" });

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "upload" });
export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  res.redirect(routes.videoDetail(12314));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "video details" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "edit video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "delete video" });
