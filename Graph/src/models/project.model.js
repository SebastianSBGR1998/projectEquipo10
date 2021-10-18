const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({  
  name: { type: String, required: true },
  description: { type: String, required: true },
  budget: { type: String, required: true },
});

const Project = mongoose.model('Proyect', projectSchema)
module.exports = Project
