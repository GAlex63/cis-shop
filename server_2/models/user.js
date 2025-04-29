const pool = require("./db");

module.exports = {
  async createUser(email, hashedPassword, role = "user") {
    const result = await pool.query(
      "INSERT INTO users (email, password_hash, role) VALUES ($1, $2, $3) RETURNING *",
      [email, hashedPassword, role]
    );
    return result.rows[0];
  },

  async getUserByEmail(email) {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    return result.rows[0];
  },

  async getUserById(id) {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
  },

  async updateUserRole(id, role) {
    const result = await pool.query(
      "UPDATE users SET role = $1 WHERE id = $2 RETURNING *",
      [role, id]
    );
    return result.rows[0];
  },

  async getAllUsers() {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
  },
};
