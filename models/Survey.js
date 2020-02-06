const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let surveySchema = new Schema({
    surname : {
        type: String,
        required: [true, "Surname field is required."]
    },
    firstNames : {
        type: String,
        required: [true, "First Names field is required."]
    },
    contactNumber : {
        type : String,
        required: [true, "Contact Number field is required."]
    },
    date: {
        type: Date,
        default: Date.now()
    },
    age: {
        type: Number,
        required: [true, "Age field is required."]
    },
    pizza: {
        type: String
    },
    pasta: {
        type: String
    },
    pap: {
        type: String
    },
    chicken: {
        type: String
    },
    beef: {
        type: String
    },
    other: {
        type: String
    },
    food: {
        type: [String],
        default: undefined
    },
    eatOut: {
        type: String
    },
    movies: {
        type: String
    },
    tv: {
        type: String
    },
    radio: {
        type: String
    },
    hobbies: {
        type: [String]
    }
});

module.exports = mongoose.model("survey", surveySchema);
