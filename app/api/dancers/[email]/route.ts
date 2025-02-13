import { NextRequest, NextResponse } from "next/server";

import connectMongoDB from "../../../lib/db";
import Dancer from '../../../models/dancer';

export async function GET(request: NextRequest, { params }){
  const { email } = params;
  await connectMongoDB();
  const dancer = await Dancer.findOne({ email });
  return NextResponse.json(dancer, { status: 200 });
}
