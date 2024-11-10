// models/User.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  Rollno: {
    type: Number,
    required: true,
  },
  CG:{
    type: Number,
    required: true,
  },
});

const Student = mongoose.model('Student', studentSchema);



module.exports = Student;