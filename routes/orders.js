var express = require("express");
var router = express.Router();
var Controller = require("../controllers/orders");
const { google } = require("googleapis");


function org(req, res, next) {
    req.sheetId = "1jsh9fPB0jG_owD3cmpJAzTx6wLtCqP0hhFkgFRlVB70";

    req.sheetName = "orders";

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


router.post("/Adddata", org, Controller.Adddata);

router.get("/getAllData", org, Controller.getAllData);

router.get("/getDataById/:id", org, Controller.getDataById);


module.exports = router;
