const express = require("express");
const router = express.Router();
const Students = require("../model/students.model")


router.get("/students", (req, res) => {
    try {
        Students.find((err, data) => {
        if(err) {
          return res.status(400).send({message: "Error while getting students list"});
        }
        return res.status(200).send(data);
      });
    } catch (error) {
      res.status(500).send({message: "Internal Server Error"});
    }
  });

router.post("/students/create", (req, res) => {
    try{
      let students = new Students(req.body);
      students.save((err, data) => {
        if(err) {
          return res.status(400).send({message: "Error while adding a new student"});
        }
        res.status(201).send({id: data._id, message: "New student has been added successfully."})
      })
    } catch(error) {
      res.status(500).send({message: "Internal Server Error"});
  
    }
  });

router.put("/students/update/:studentID", (req, res) => {
    try {
        Students.findByIdAndUpdate({_id: req.params.studentID}, {$set: req.body}, (err, data) => {
        if (err) {
          return res.status(400).send({message: "Error while updating an existing students"})
        }
        res.status(200).send({id: data._id, message: "Students has been updated successfully"})
      })
    } catch(error) {
      res.status(500).send({message: "Internal Server Error"})
    }
  });

module.exports = router;