import Signup from '../Models/Signup.js';
import AdminContent from '../Models/AdminContent.js';

export const getUsers = async (req, res) => {
  try { res.status(200).json(await Signup.find().select('-password')); } catch (error) { res.status(500).json({ message: error.message }); }
};
export const addUser = async (req, res) => {
  try { const user = await Signup.create(req.body); res.status(201).json({ user }); } catch (error) { res.status(500).json({ message: error.message }); }
};
export const updateUser = async (req, res) => {
  try { const user = await Signup.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).select('-password'); if (!user) return res.status(404).json({ message: 'User not found' }); res.status(200).json({ user }); } catch (error) { res.status(500).json({ message: error.message }); }
};
export const deleteUser = async (req, res) => {
  try { const user = await Signup.findByIdAndDelete(req.params.id); if (!user) return res.status(404).json({ message: 'User not found' }); res.status(200).json({ message: 'User deleted successfully' }); } catch (error) { res.status(500).json({ message: error.message }); }
};
export const getSingleUser = async (req, res) => {
  try {
    const user = await Signup.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getContent = async (req, res) => {
  try { res.status(200).json(await AdminContent.find({ type: req.params.type })); } catch (error) { res.status(500).json({ message: error.message }); }
};
export const getSingleContent = async (req, res) => {
  try {
    const content = await AdminContent.findOne({ _id: req.params.id, type: req.params.type });
    if (!content) return res.status(404).json({ message: 'Content not found' });
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const addContent = async (req, res) => {
  try { const content = await AdminContent.create({ type: req.params.type, data: req.body }); res.status(201).json({ content }); } catch (error) { res.status(500).json({ message: error.message }); }
};
export const updateContent = async (req, res) => {
  try { const content = await AdminContent.findOneAndUpdate({ _id: req.params.id, type: req.params.type }, { data: req.body }, { new: true }); if (!content) return res.status(404).json({ message: 'Content not found' }); res.status(200).json({ content }); } catch (error) { res.status(500).json({ message: error.message }); }
};
export const deleteContent = async (req, res) => {
  try { const content = await AdminContent.findOneAndDelete({ _id: req.params.id, type: req.params.type }); if (!content) return res.status(404).json({ message: 'Content not found' }); res.status(200).json({ message: 'Content deleted successfully' }); } catch (error) { res.status(500).json({ message: error.message }); }
};
