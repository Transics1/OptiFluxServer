// const ContactMessage = require("../models/ContactMessage");

// const submitContact = async (req, res) => {
//   try {
//     const { name, email, contact, message } = req.body;
//     if (!name || !email || !contact || !message) {
//       return res.status(400).json({ message: "All fields are required." });
//     }
//     const newMessage = new ContactMessage({ name, email, contact, message });
//     await newMessage.save();
//     res.status(201).json({ message: "Message received!" });
//   } catch (err) {
//     res.status(500).json({ message: "Server error." });
//   }
// };

// module.exports = { submitContact };

const ContactMessage = require("../models/ContactMessage");

const submitContact = async (req, res) => {
  try {
    const { name, email, contact, message } = req.body;
    if (!name || !email || !contact || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }
    await ContactMessage.create({ name, email, contact, message });
    res.status(201).json({ message: "Message received!" });
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
};

module.exports = { submitContact };