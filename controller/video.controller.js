const Video = require("../models/video.model");

let findAllVideos = async (req, res, next) => {
  let videos = await Video.find();
  res.status(200).json({ message: "Video", videos });
};

let postNewVideo = async (req, res, next) => {
  let data = req.body;
  console.log(data);
  let video = new Video.create({ ...data, category: "Mibombo" });
  // video.title = req.title
  // video.duration = req.duration
  // video.author = req.author
  await video.save();

  res.status(200).json({ name: "video", video });
};

let findVidoe = async (req, res, next) => {
  let id = req.params.id;
  let video = new Video.findById(id);
  res.status(200).json({ name: "Video", video });
};

let updateVidoeById = async (req, res, next) => {
  let id = req.params.id;
  let data = req.body;
  let video = await Video.findByIdAndUpdate(id, data, { new: true });
  res.status(200).json({ name: "Video", video });
};

let deleteVidoeById = async (req, res, next) => {
  let id = req.params.id;
  await Video.findByIdAndDelete(id);
  res.status(204).json({ message: "Video o'chirildi!" });
};

module.exports = {
  deleteVidoeById,
  findAllVideos,
  findVidoe,
  postNewVideo,
  updateVidoeById,
};
