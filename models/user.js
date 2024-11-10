const mongoose = require('mongoose');
const Course = require('./models/course');
const userSchema = new mongoose.Schema({
    
    Rollno: {
      type: Number,
      required: true,
    },
    CG:{
      type: Number,
      required: true,
    },
    choice:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:Course,
    }],

  });
  const User = mongoose.model('User', userSchema);
  
module.exports = User;