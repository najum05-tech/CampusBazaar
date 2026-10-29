import Contact from '../Models/Contact.js';

export const addContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({ message: 'Message sent successfully', contact });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
