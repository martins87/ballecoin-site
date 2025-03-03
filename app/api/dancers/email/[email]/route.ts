import { NextRequest, NextResponse } from "next/server";

import connectMongoDB from "../../../../lib/db";
import Dancer from '../../../../models/dancer';

// @ts-expect-error:next-line
export async function GET(request: NextRequest, { params }){
  const { email } = params;
  await connectMongoDB();
  const dancer = await Dancer.findOne({ email });
  return NextResponse.json(dancer, { status: 200 });
}

// @ts-expect-error:next-line
export async function PUT(request: NextRequest, { params }) {
  const { email } = params; 
  const {
    newName: name,
    newResidenceCountry: residenceCountry,
    newSolanaAddress: solanaAddress,
    newBirthCountry: birthCountry,
    newDescription: description,
    newInstagram: instagram,
    newTiktok: tiktok,
    newPicture: picture
  } = await request.json();
  await connectMongoDB();
  await Dancer.findOneAndUpdate(
    { email: email},
    {
      name,
      residenceCountry,
      solanaAddress,
      birthCountry,
      description,
      instagram,
      tiktok,
      picture
    }
  );
  return NextResponse.json({ message: "Dancer updated" }, { status: 200 });
}