import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",       // default XAMPP MySQL password
  database: "career_guidance",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
