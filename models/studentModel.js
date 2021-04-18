//step 1: import schema from mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//step 2: Writing the schema
const studentSchema = new Schema(
    {
    studentFirstName: String,
    collegeName: String,
    location: String,
    },
    { collection: "studentdetails" }
    );

//step 3: Export the schema
module.exports = mongoose.model("studentdetails", studentSchema);