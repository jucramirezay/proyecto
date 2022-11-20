const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let employeeSchema = new Schema(
    {
        name: {
            type: String,
        },
        phoneNumber: {
            type: String,
        },
        address: {
            type: String,
        },
        activity: {
            type: String,
        },
        experienceYears: {
            type: Number,
        }
    },  
    {
        collection: 'employees',
    }   
);

module.exports = mongoose.model('employees', employeeSchema);