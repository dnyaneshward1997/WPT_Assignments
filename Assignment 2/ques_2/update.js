const mysql = require("mysql2");
let dbparams = {
  host: "localhost",
  user: "dnyaneshwar",
  password: "cdac",
  database: "beed",
  port: "3306",
};
const con = mysql.createConnection(dbparams);
let itemno = 7;

con.query(
  "update item set category='smartphone' where itemno = ?",
  [itemno],
  (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Done");
      console.log(res.affectedRows);
      // console.log(res[0].username);
    }
  }
);
