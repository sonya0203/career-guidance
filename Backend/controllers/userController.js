import db from "../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

/* REGISTER */
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  await db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashed]
  );

  res.json({ success: true, message: "User registered" });
};

/* LOGIN */
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const [rows] = await db.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (!rows.length) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const user = rows[0];
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id }, JWT_SECRET, {
    expiresIn: "1d",
  });

  res.json({
    token,
    user: { id: user.id, name: user.name, email: user.email },
  });
};

/* PROFILE */
export const getUserProfile = async (req, res) => {
  const [rows] = await db.query(
    "SELECT id, name, email FROM users WHERE id = ?",
    [req.user.id]
  );
  res.json(rows[0]);
};

export const updateUserProfile = async (req, res) => {
  const { name } = req.body;

  await db.query(
    "UPDATE users SET name = ? WHERE id = ?",
    [name, req.user.id]
  );

  res.json({ success: true });
};
