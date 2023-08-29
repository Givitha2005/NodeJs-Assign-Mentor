require("dotenv").config();
const express = require("express");

// Importing DB connection
const db = require("./db/connect");

// Importing Routes
const studentRoutes = require("./routes/students.routes");
const mentorRoutes = require("./routes/mentors.routes");

const app = express();
db();

app.use(express.json());


// Adding Custom Middleware
app.use("/", studentRoutes);
app.use("/", mentorRoutes);

app.get('/', (req, res) => {
  res.send('Mentor and Student Assigning with Database');
});

const PORT = process.env.PORT || 11001;

app.listen(PORT, () => {
  console.log(`Application is running on PORT ${PORT}`);
});
