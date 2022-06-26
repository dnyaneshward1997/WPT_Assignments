const mysql = require("mysql2");
let dbparams = {
  host: "localhost",
  user: "dnyaneshwar",
  password: "cdac",
  database: "beed",
  port: "3306",
};
const con = mysql.createConnection(dbparams);

let reso_status = "true";

con.query(
  "select * from resources where resstatus = ?",
  [reso_status],
  (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Done");
      // console.log(res.affectedRows);
      for (let i = 0; i < res.length; i++) {
        console.log(res[i].reso_id);
        console.log(res[i].reso_name);
        console.log(res[i].reso_status);
      }
    }
  }
);
