const express = require("express");

const app = express();
const mysql = require("mysql2");
app.use(express.static("sf"));
let dbparams = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "beed",
  port: 3306,
};

const con = mysql.createConnection(dbparams);

app.get("/pincode", (req, resp) => {
  let pincode1 = req.query.pincode;
  console.log(pincode1);
  let details = { status: false, cityname: {} };
  con.query(
    "select city from city_table where pincode=?",
    [pincode1],
    (error, cityRow) => {
      if (error) {
      } else if (cityRow.length > 0) {
        details.status = true;
        details.cityname = cityRow[0];
      }
      resp.send(details);

      console.log("search");
    }
  );
  console.log(details.cityname.city);
});
app.listen(8085, function () {
  console.log("server listening at port 8085...");
});
