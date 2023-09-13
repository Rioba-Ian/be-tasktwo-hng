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

const deletePerson = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query("DELETE FROM Persons WHERE id = $1", [id]);
    if (result.rowCount > 0) {
      res.status(200).json({ msg: "Success" });
    } else {
      res.status(404).json(`Person with id ${id} not found.`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error." });
  }
};

const updatePerson = async (req, res) => {
  const { id } = req.params;

  const { name, email, address } = req.body;

  if (!name && !email && !address) {
    res.status(400).json({
      error:
        "At least one of the fields is required to do an update: name, email and address",
    });
  }

  let query = "UPDATE Persons SET";
  let values = [];
  let placeholders = [];

  if (name) {
    values.push(name);
    placeholders.push(`name = $${values.length}`);
  }

  if (email) {
    values.push(email);
    placeholders.push(`email = $${values.length}`);
  }

  if (address) {
    values.push(address);
    placeholders.push(`address = $${values.length}`);
  }

  console.log(query);
  query +=
    " " +
    placeholders.join(", ") +
    " WHERE id = $" +
    (values.length + 1) +
    " RETURNING *";
  values.push(id);
  console.log(query);

  try {
    const result = await db.query(query, values);
    if (result.rowCount > 0) {
      res.status(200).json(result.rows[0]);
    } else {
      res.status(404).json(`Person with id: ${id} not found.`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error." });
  }
};

module.exports = {
  createPerson,
  getOnePerson,
  getAllPersons,
  deletePerson,
  updatePerson,
};
