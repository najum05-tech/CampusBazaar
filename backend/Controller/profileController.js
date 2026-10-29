import Signup from '../Models/Signup.js';

export const getProfile = async (req, res) => {
  try {
    if (req.user._id.toString() !== req.params.id && req.user.role !== 'Admin') return res.status(403).json({ message: 'Not allowed' });
    const user = await Signup.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    if (req.user._id.toString() !== req.params.id && req.user.role !== 'Admin') return res.status(403).json({ message: 'Not allowed' });
    const user = await Signup.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'Profile updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
