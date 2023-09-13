const express = require("express");

const routes = express.Router();

const personController = require("../controllers/personController");

// get all persons
routes.get("/", personController.getAllPersons);

// get just one person
routes.get("/:id", personController.getOnePerson);

// create a single person
routes.post("/", personController.createPerson);

// delete route
routes.delete("/:id", personController.deletePerson);

// update route
routes.put("/:id", personController.updatePerson);

module.exports = routes;
