import mongoose from 'mongoose';

const signupSchema = new mongoose.Schema({
  
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const Signup = mongoose.model('Signup', signupSchema);

export default Signup;