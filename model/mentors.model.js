const mongoose = require("mongoose");

const mentorSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
    trim: true,
  },

  email: {
    required: true,
    type: String,
    trim: true,
    unique: true
  },

  assigned_students: [String],
});

module.exports = mongoose.model("Mentors", mentorSchema);
