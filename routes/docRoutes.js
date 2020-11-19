const express = require("express");
const router = express.Router();

// ROUTES declaration

const getAllDocs = (req, res) => {
  res.status(200).json({
    status: "success",
    results: docs.length,
    data: {
      // the object   the data
      pelancongan: docs,
    },
  });
};

const getDoc = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};

const createDoc = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
  // status 200 is ok
  // status 201 is created
};

const updateDoc = (req, res) => {
  res.status(200).json({
    status: "success",
    data: { doc: "<Updated doc here...>" },
  });
};

const deleteDoc = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};

router.route("/").get(getAllDocs).post(createDoc);

router.route("/:id").get(getDoc).patch(updateDoc).delete(deleteDoc);

module.exports = router;
