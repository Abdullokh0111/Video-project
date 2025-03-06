const express = require("express");
const multer = require("multer");

const {
  findAllVideos,
  postNewVideo,
  findVidoe,
  updateVidoeById,
  deleteVidoeById,
} = require("../controller/video.controller");

let router = express.Router();

let storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.route("/").get(findAllVideos).post(upload.array("images"), postNewVideo);
router
  .route("/:id")
  .get(findAllVideos)
  .patch(updateVidoeById)
  .delete(deleteVidoeById);

module.exports = router;
