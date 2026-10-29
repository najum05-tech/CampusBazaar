import mongoose from 'mongoose';

const adminContentSchema = new mongoose.Schema({
  type: { type: String, required: true },
  data: { type: mongoose.Schema.Types.Mixed, required: true }
});

const AdminContent = mongoose.model('AdminContent', adminContentSchema);

export default AdminContent;
