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
let itemname = "Harry Potter And The Goblet Of Fire";
let price = 700;
let category = "Book";

con.query(
  "insert into item (itemno, itemname, price, category) values (?, ?, ?, ?)",
  [itemno, itemname, price, category],
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
