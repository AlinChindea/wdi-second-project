const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: 'String', required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
});

commentSchema.methods.belongsTo = function commentBelongsTo(user) {
  return this.createdBy.id === user.id;
};

const tripSchema = new mongoose.Schema({
  name: { type: String, required: true },
  river: { type: String, required: true },
  startPoint: { type: String, required: true },
  endPoint: { type: String, required: true },
  description: { type: String, required: true }
  // createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  // comments: [ commentSchema ]
});

tripSchema.methods.belongsTo = function belongsTo(user) {
  return this.createdBy.id === user.id;
};

// console.log(tripSchema);

module.exports = mongoose.model('Trip', tripSchema);
