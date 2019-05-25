const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
        name: {
            type: String
        },
        author: {
            type: String
        },
        type: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now()
        },
        createdOn: {
            type: Date,
            default: Date.now()
        },
        details: {
            type: String
        },
        allDay: {
            type: Boolean
        },
        isRepeating: {
            type: Boolean
        },
    });

module.exports = mongoose.model("Event", eventSchema);