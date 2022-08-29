const express = require("express");

const postController = require("../Controllers/postController");

const router = express.Router();

router.route("/").post(postController.create).get(postController.getAll);
router.route("/:id").get(postController.getOne);
module.exports = router;
