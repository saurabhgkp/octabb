const { google } = require("googleapis");


const googleSheets = google.sheets({ version: "v4", auth: async () => await auth.getClient() });

exports.getAllData = async (req, res, sheetName) => {
  try {
    // Read rows from spreadsheet
    const getRows = await req.googleSheets.spreadsheets.values.get({
      auth: req.auth,
      spreadsheetId: req.sheetId,
      range: req.sheetName,
    });
    // res.send(getRows.data.values);
    const obj = getRows.data.values;

    var width = obj[0].length;

    var depth = obj.length;
    // console.log(width, depth);

    var keys = "";
    for (let i = 0; i < width; i++) {
      keys = [...keys, obj[0][i]];
    }
    var values = [];
    for (let i = 1; i < depth; i++) {
      for (let j = 0; j < width; j++) {
        values.push([keys[j], obj[i][j]]);
      }
    }

    var gg = [];
    var finalData = [];

    var flag = 0;

    for (let k = 0; k < values.length; k++) {
      flag++;

      gg.push(values[k]);

      if (flag == width) {
        finalData.push(Object.fromEntries(gg));
        gg = [];
        flag = 0;
      }
    }
    return res
      .status(200)
      .json({ Status: 1, Message: "Fetched Successfully", Data: finalData });
  } catch (error) {
    return res
      .status(403)
      .json({ Status: 0, Message: "no data found", });
  }
};

exports.getDataById = async (req, res) => {
  //const id = 7;
  const id = req.params.id

  // const id = 7;
  // const data = await Sheet.find({ sheetName });

  // var sheetId = data[0].sheetId;

  try {
    // Read rows from spreadsheet
    const getRows = await req.googleSheets.spreadsheets.values.get({
      auth: req.auth,
      spreadsheetId: req.sheetId,
      range: req.sheetName,
    });
    // res.send(getRows.data.values);
    const obj = getRows.data.values;

    var width = obj[0].length;

    var depth = obj.length;
    // console.log(width, depth);

    var keys = "";
    for (let i = 0; i < width; i++) {
      keys = [...keys, obj[0][i]];
    }
    var values = [];
    // for (let i = 1; i < depth; i++) {
    for (let j = 0; j < width; j++) {
      values.push([keys[j], obj[id][j]]);
    }
    // }

    var gg = [];
    var finalData = [];

    var flag = 0;

    for (let k = 0; k < values.length; k++) {
      flag++;

      gg.push(values[k]);

      if (flag == width) {
        finalData.push(Object.fromEntries(gg));
        gg = [];
        flag = 0;
      }
    }
    return res
      .status(200)
      .json({ Status: 1, Message: "Fetched Successfully", Data: finalData });
    // return res.send(finalData);
  } catch (error) {
    return res
      .status(403)
      .json({ Status: 0, Message: "no data found", });
  }
};

exports.updateById = async (req, res) => {
  try {
    // const id = 4;
    const { id } = req.query;
    //  const lRange = String.fromCharCode(65 + Object.keys(req.body).length);
    // const idd = parseInt(id);

    const {
      A = id,
      B = null,
      C = null,
      D = null,
      E = null,
      F = null,
      G = null,
      H = null,
      I = null,
      J = null,
      K = null,
      L = null,
      M = null,
      N = null,
      O = null,
      P = null,
      Q = null,
      R = null,
      S = null,
      T = null,
      U = null,
      V = null,
      W = null,
      X = null,
      Y = null,
      Z = null,
    } = req.body;
    // console.log(G);
    const idd = parseInt(A);

    const response = await req.googleSheets.spreadsheets.values.update({
      auth: req.auth,
      spreadsheetId: req.sheetId,
      valueInputOption: "USER_ENTERED",
      range: `${req.sheetName}!A${idd + 1}:Z${idd + 1}`,
      resource: {
        values: [
          [
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H,
            I,
            J,
            K,
            L,
            M,
            N,
            O,
            P,
            Q,
            R,
            S,
            T,
            U,
            V,
            W,
            X,
            Y,
            Z,
          ],
        ],
      },
    });

    return res
      .status(200)
      .json({ status: 1, Message: `Successfully Updated With ID ${id}` });
  } catch (error) {
    return res
      .status(403)
      .json({ Status: 0, Message: "somthing want wrong", });
  }
};

exports.deleteById = async (req, res) => {
  // const id = 8;
  const { id } = req.query;
  const idd = parseInt(id);
  //console.log(idd);
  try {
    const response = await req.googleSheets.spreadsheets.values.clear({
      auth: req.auth,
      spreadsheetId: req.sheetId,
      range: `${req.sheetName}!A${idd + 1}:F${idd + 1}`,
    });
    // res.send("deleted");
    return res
      .status(200)
      .json({ status: 1, Message: `deleted successful ${id} ` });
    // return res.send(finalData);
  } catch (error) {
    return res
      .status(403)
      .json({ Status: 0, Message: "somthing want wrong", });
  }
};


exports.Adddata = async (req, res) => {
  try {
    const getRows = await req.googleSheets.spreadsheets.values.get({
      auth: req.auth,
      spreadsheetId: req.sheetId,
      range: req.sheetName,
    });
    const obj = getRows.data.values;
    var id = obj.length;
    //  const lRange = String.fromCharCode(65 + Object.keys(req.body).length);
    // const idd = parseInt(id);

    const {
      A = id,
      B = null,
      C = null,
      D = null,
      E = null,
      F = null,
      G = null,
      H = null,
      I = null,
      J = null,
      K = null,
      L = null,
      M = null,
      N = null,
      O = null,
      P = null,
      Q = null,
      R = null,
      S = null,
      T = null,
      U = null,
      V = null,
      W = null,
      X = null,
      Y = null,
      Z = null,
    } = req.body;
    // console.log(G);
    const idd = parseInt(A);

    const response = await req.googleSheets.spreadsheets.values.update({
      auth: req.auth,
      spreadsheetId: req.sheetId,
      valueInputOption: "USER_ENTERED",
      range: `${req.sheetName}!A${idd + 1}:Z${idd + 1}`,
      resource: {
        values: [
          [
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H,
            I,
            J,
            K,
            L,
            M,
            N,
            O,
            P,
            Q,
            R,
            S,
            T,
            U,
            V,
            W,
            X,
            Y,
            Z,
          ],
        ],
      },
    });

    return res
      .status(200)
      .json({ status: 1, Message: `Successfully Updated With ID ${id}` });
  } catch (error) {
    return res
      .status(403)
      .json({ Status: 0, Message: "somthing want wrong", });
  }
};


exports.addData = async (req, res) => {
  const getRows = await req.googleSheets.spreadsheets.values.get({
    auth: req.auth,
    spreadsheetId: req.sheetId,
    range: req.sheetName,
  });
  const obj = getRows.data.values;
  var id = obj.length;

  const {
    A = id,
    B = null,
    C = null,
    D = null,
    E = null,
    F = null,
    G = null,
    H = null,
    I = null,
    J = null,
    K = null,
    L = null,
    M = null,
    N = null,
    O = null,
    P = null,
    Q = null,
    R = null,
    S = null,
    T = null,
    U = null,
    V = null,
    W = null,
    X = null,
    Y = null,
    Z = null,
  } = req.body;
  try {
    // Write row(s) to spreadsheet   headerKey
    await googleSheets.spreadsheets.values.append({
      auth: req.auth,
      spreadsheetId: req.sheetId,
      range: req.sheetName,
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [
          [
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H,
            I,
            J,
            K,
            L,
            M,
            N,
            O,
            P,
            Q,
            R,
            S,
            T,
            U,
            V,
            W,
            X,
            Y,
            Z,
          ],
        ],
      },
    });
    return res
      .status(200)
      .json({ status: 1, Message: `Successfully submitted! With ID ${id}` });
  } catch (error) {
    return res
      .status(403)
      .json({ Status: 0, Message: "somthing want wrong", });
  }
};


