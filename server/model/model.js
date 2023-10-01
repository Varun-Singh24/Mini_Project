const mongoose = require ('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    
    // status: String,
    Marks1: {
        type: Number,
        required: true


    },
    Marks2: {
        type: Number,
        required: true

    },
    Marks3: {
        type: Number,
        required: true
    },
    Marks4: {
        type: Number,
        required: true

    },
    Marks5: {
        type: Number,
        required: true
    }
    ,
    Percentage: {
        type: Number,
        // Calculating the percentage based on Marks1 to Marks5
        // You can use a custom function or a getter method to calculate it
        // Here, we'll use a getter method to automatically calculate it on get
        get: function() {
            // Sum of all the marks
            const sumMarks = this.Marks1 + this.Marks2 + this.Marks3 + this.Marks4 + this.Marks5;
            // Percentage formula: (sum of marks / total marks) * 100
            return (sumMarks / 500) * 100;
        },
        // The 'Percentage' field is read-only and cannot be set directly
        // If you try to set it, it won't throw an error but won't change the value
        set: function(value) {
            // Do nothing, make it read-only
        }
    }
});



const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;

