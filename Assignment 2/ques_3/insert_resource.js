const mysql = require("mysql2");
let dbparams = {
  host: "localhost",
  user: "dnyaneshwar",
  password: "cdac",
  database: "beed",
  port: "3306",
};
const con = mysql.createConnection(dbparams);
let reso_id = 7;
let reso_name = "Harry Potter";
let reso_status = false;

con.query(
  "insert into resources (resid, resname, resstatus) values (?, ?, ?)",
  [reso_id, reso_name, reso_status],
  (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Done");
      console.log(res.affectedRows);
    }
  }
);
