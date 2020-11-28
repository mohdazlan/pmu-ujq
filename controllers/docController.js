const Document = require("./../models/docModel");
// ROUTES declaration

exports.getAllDocs = (req, res) => {
  res.status(200).json({
    status: "success",
    //
    message: "This route is not yet defined",
  });
};

exports.getDoc = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};

exports.createDoc = async (req, res) => {
  try {
    console.log(req.body);

    const newDoc = await Document.create(req.body);

    console.log(newDoc);
    res.status(201).json({
      status: "success",
      data: { tour: newDoc },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err + "what the fuck",
    });
  }
  // status 200 is ok
  // status 201 is created
};

exports.updateDoc = (req, res) => {
  res.status(200).json({
    status: "success",
    data: { doc: "<Updated doc here...>" },
  });
};

exports.deleteDoc = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};
