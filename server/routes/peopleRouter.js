const express = require("express")
const peopleRouter = express.Router()
const {addPeople, viewPeople, editPeople, updatePeople, delPeople} = require('../control/peopleControl')

peopleRouter.route("/addPeople").post(addPeople)
peopleRouter.route("/viewPeople").get(viewPeople)
peopleRouter.route("/editPeople/:id").get(editPeople)
peopleRouter.route("/updatePeople/:id").post(updatePeople)
peopleRouter.route("/delPeople/:id").delete(delPeople)

module.exports= peopleRouter