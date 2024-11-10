const mongoose = require('mongoose');
const Student = require('./models/student');
const courseSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    dept: {
      type: String,
      required: true,
      
    },

    Sem: {
      type: Number,
      required: true,
    },
    seats:{
      type: Number,
      required: true,
    },
    student:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:Student,
    }],
  });
  const Course = mongoose.model('Course', courseSchema);
  
module.exports = Course;