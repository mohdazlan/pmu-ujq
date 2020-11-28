const express = require("express");
const docController = require("./../controllers/docController");

const router = express.Router();

router.route("/").get(docController.getAllDocs).post(docController.createDoc);

router
  .route("/:id")
  .get(docController.getDoc)
  .patch(docController.updateDoc)
  .delete(docController.deleteDoc);

module.exports = router;
