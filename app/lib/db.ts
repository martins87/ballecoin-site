import mongoose from "mongoose";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;

export const getDancers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/dancers`, {
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error("Failed to fetch dancers");
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export const getDancerById = async (id: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/dancers/${id}`, {
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error("Failed to fetch dancer");
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export const getDancerByEmail = async (email: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/dancers/email/${email}`, {
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error("Failed to fetch dancer");
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export const addDancer = async (name: string, email: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/dancers/`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        residenceCountry: "",
        solanaAddress: "",
        birthCountry: "",
        description: "",
        instagram: "",
        tiktok: "",
        picture: ""
      })
    });

    if (!response.ok) {
      throw new Error("Failed to add dancer");
    }

    console.log("Dancer added successfully");

    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export const updateDancer = async (
  name: string,
  email: string,
  residenceCountry: string,
  solanaAddress: string,
  birthCountry: string,
  description: string,
  instagram: string,
  tiktok: string,
  picture: string,
) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/dancers/${email}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        newName: name,
        email,
        newResidenceCountry: residenceCountry,
        newSolanaAddress: solanaAddress,
        newBirthCountry: birthCountry,
        newDescription: description,
        newInstagram: instagram,
        newTiktok: tiktok,
        newPicture: picture
      })
    });

    if (!response.ok) {
      throw new Error("Failed to update dancer");
    }

    console.log("Dancer edited successfully");

    return response.json();
  } catch (error) {
    console.error(error);
  }
}