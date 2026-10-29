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
  },
  phoneNumber: {
    type: String
  },
  role: {
    type: String,
    default: 'Buyer',
    enum: ['Buyer', 'Seller', 'Admin']
  },
  university: {
    type: String,
    enum: [
      "COMSATS University Islamabad",
      "University of Abbottabad",
      "Other"
    ]
  },
  campus: {
    type: String,
    enum: ["Abbottabad Campus", "Islamabad Campus", "Other"]
  },
  status: {
    type: String,
    default: 'Active',
    enum: ['Active', 'Inactive', 'Banned']
  },
  badge: {
    type: String,
    default: 'Student'

  },
  bio: {
    type: String
  },
  phone: {
    type: Number
  },
  location: {
    type: String
  }
});

const Signup = mongoose.model('Signup', signupSchema);

export default Signup;
