const express = require("express");

const replyController = require("../Controllers/replyController");

const router = express.Router();

router.route("/").post(replyController.comment);

router.route("/:id").get(replyController.getComments);

module.exports = router;
