var express = require("express");
var router = express.Router();
var Controller = require("../controllers/googleSheet");
const { google } = require("googleapis");


function org(req, res, next) {
  req.sheetId = "1JmpRfmEfSdVAxAu2SRvzsnswI1-lnHNbts-3F_1xtlg";

  req.sheetName = "pcdb";

  req.auth = new google.auth.GoogleAuth({
    keyFile: "./exam-35.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });
  req.googleSheets = google.sheets({
    version: "v4",
    auth: async () => await auth.getClient(),
  });

  next();
}
router.post("/addData", org, Controller.addData);

router.post("/Adddata", org, Controller.Adddata);

router.get("/getAllData", org, Controller.getAllData);

router.get("/getDataById/:id", org, Controller.getDataById);

router.put("/updateById", org, Controller.updateById);


router.delete("/deleteById", org, Controller.deleteById);

module.exports = router;
