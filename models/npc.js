var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var NPCSchema = new Schema({
  //NPC Name
  name: {
    type: String,
    required: true
  },
  race: {
      type: String,
      required: true
  },
  gender: {
      type: String
  },
  class: {
      type: String,
      required: true
  },
  //can npc fight in battle?
  combatant: {
    type: Boolean,
    default: false,
    required: true
  }
  
});

// This creates our model from the above schema, using mongoose's model method
var NPC = mongoose.model("NPCs", NPCSchema);

// Export the Article model
module.exports = NPC;
