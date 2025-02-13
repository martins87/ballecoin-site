import mongoose, { Schema } from "mongoose";

// name
// email
// countryOfResidence
// countryOfBirth
// solAddress
// birthdate
// description
// instagram
// tiktok

const dancerSchema = new Schema(
  {
    name: String,
    email: String,
    // countryOfResidence: String,
    // countryOfBirth: String,
    // solAddress: String,
    // birthdate: String,
    // description: String,
  },
  { timestamps: true }
);

const Dancer = mongoose.models.Dancer || mongoose.model("Dancer", dancerSchema);

export default Dancer;
