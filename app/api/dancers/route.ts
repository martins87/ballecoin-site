import { NextRequest, NextResponse } from "next/server";

import connectMongoDB from "../../lib/db";
import Dancer from '../../models/dancer'

export async function POST(request: NextRequest) {
  const { name, email, picture } = await request.json();
  await connectMongoDB();
  await Dancer.create({ name, email, picture });
  return NextResponse.json({ message: "Dancer created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const dancers = await Dancer.find();
  return NextResponse.json(dancers)
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Dancer.findByIdAndDelete(id);
  return NextResponse.json({ message: "Dancer deleted" }, { status: 200 });
}