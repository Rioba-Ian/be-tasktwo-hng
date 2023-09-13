const db = require("../database/Person");

const getOnePerson = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query("SELECT * FROM Persons WHERE id = $1", [id]);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllPersons = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM Persons");
    console.log(result.rows, "all persons");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server errror." });
  }
};

const createPerson = async (req, res) => {
  const { name, email, address } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  let query = "INSERT INTO Persons (name";
  let values = [name];
  let placeholders = ["$1"];

  if (email) {
    query += ", email";
    values.push(email);
    placeholders.push(`$${values.length}`);
  }

  if (address) {
    query += ", address";
    values.push(address);
    placeholders.push(`$${values.length}`);
  }

  query += ") VALUES (" + placeholders.join(", ") + ") RETURNING *";

  try {
    const result = await db.query(query, values);
    res.status(201).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json("Internal Server error");
  }
};

const deletePerson = async (req, res) => {};

const updatePerson = async (req, res) => {};

module.exports = {
  createPerson,
  getOnePerson,
  getAllPersons,
};
