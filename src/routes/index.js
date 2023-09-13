const express = require("express");

const routes = express.Router();

const personController = require("../controllers/personController");

// get all persons
routes.get("/", personController.getAllPersons);

// get just one person
routes.get("/:id", personController.getOnePerson);

// create a single person
routes.post("/", personController.createPerson);

// add delete route

// add update route

module.exports = routes;
