import mongoose, { Schema } from "mongoose";

const dancerSchema = new Schema(
  {
    name: String,
    email: String,
    residenceCountry: String,
    solanaAddress: String,
    birthCountry: String,
    // birthdate: String,
    balletSchool: String,
    description: String,
    instagram: String,
    tiktok: String,
    picture: String,
  },
  { timestamps: true }
);

const Dancer = mongoose.models.Dancer || mongoose.model("Dancer", dancerSchema);

export default Dancer;
