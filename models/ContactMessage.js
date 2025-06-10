// const mongoose = require("mongoose");

// const ContactMessageSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   contact: { type: String, required: true },
//   message: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("ContactMessage", ContactMessageSchema);

const { DataTypes } = require('sequelize');
const sequelize = require('../config/sql');

const ContactMessage = sequelize.define('ContactMessage', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  contact: { type: DataTypes.STRING, allowNull: false },
  message: { type: DataTypes.TEXT, allowNull: false },
}, {
  timestamps: true,
});

module.exports = ContactMessage;