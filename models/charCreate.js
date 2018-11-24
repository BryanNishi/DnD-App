var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var newCharSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    charClass: {
        type: String,
        required: true
    },
    lvl: {
        type: Number,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    subrace: {
        type: String
    },
    xp: {
        type: Number,
        required: true
    },
    xpToLvl: {
        type: Number
    },
    alignment: {
        type: String
    },
    diety: {
        type: String
    },
    languages: {
        type: String
    },
    size: {
        type: String
    },
    gender: {
        type: String
    },
    charAge: {
        type: String
    },
    height: {
        type: String
    },
    weight: {
        type: String
    },
    eyes: {
        type: String
    },
    hair: {
        type: String
    },
    profBonus: {
        type: String
    },
    inspiration: {
        type: String
    },
    str: {
        type: Number,
        required: true
    },
    dex: {
        type: Number,
        required: true
    },
    con: {
        type: Number,
        required: true
    },
    int: {
        type: Number,
        required: true
    },
    wis: {
        type: Number,
        required: true
    },
    cha: {
        type: Number,
        required: true
    },
    carried: {
        type: Number
    },
    encumb: {
        type: String
    },
    hvyEncumb: {
        type: String
    },
    drag: {
        type: String
    },
    ac: {
        type: Number,
        required: true
    },
    init: {
        type: Number,
        required: true
    },
    speed: {
        type: Number
    },
    hpMax: {
        type: Number,
        required: true
    },
    hpCurr: {
        type: Number,
        required: true
    },
    hitDice: {
        type: String,
        required: true
    },
    hitDiceCurr: {
        type: String
    },
    spellAbil: {
        type: String
    },
    spellDC: {
        type: Number
    },
    spellBonus: {
        type: Number
    },
    weaponMain: {
        type: String
    },
    weaponOff: {
        type: String
    },
    weaponThird: {
        type: String
    },
    proficiencies: {
        type: String
    }

});

// This creates our model from the above schema, using mongoose's model method
var newChar = mongoose.model("NPCs", newCharSchema);

// Export the Article model
module.exports = newChar;