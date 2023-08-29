const express = require("express");
const router = express.Router();
const Mentors = require("../model/mentors.model");

router.get("/mentors", (req, res) => {
    try {
        Mentors.find((err, data) => {
        if(err) {
          return res.status(400).send({message: "Error while getting mentors list"});
        }
        return res.status(200).send(data);
      });
    } catch (error) {
      res.status(500).send({message: "Internal Server Error"});
    }
  });


router.get("/mentors/:mentorID", (req, res) => {
    try {
        Mentors.find({_id: req.params.mentorID}, (err, data) => {
        if(err) {
          return res.status(400).send({message: "Error while getting a mentor info"});
        }
         res.status(200).send(data);
      });
    } catch (error) {
      res.status(500).send({message: "Internal Server Error"});
    }
  })  

router.post("/mentors/create", (req, res) => {
    try{
      let mentors = new Mentors(req.body);
      mentors.save((err, data) => {
        if(err) {
          return res.status(400).send({message: "Error while adding a new mentor"});
        }
        res.status(201).send({id: data._id, message: "New mentor has been added successfully."})
      })
    } catch(error) {
      res.status(500).send({message: "Internal Server Error"});
  
    }
  });

router.put("/mentors/update/:mentorID", (req, res) => {
    try {
        Mentors.findByIdAndUpdate({_id: req.params.mentorID}, {$set: req.body}, (err, data) => {
        if (err) {
          return res.status(400).send({message: "Error while updating an existing mentor"})
        }
        res.status(200).send({id: data._id, message: "Mentors has been updated successfully"})
      })
    } catch(error) {
      res.status(500).send({message: "Internal Server Error"})
    }
  });  

module.exports = router;