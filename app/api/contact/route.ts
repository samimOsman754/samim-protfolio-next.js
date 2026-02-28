import connectDB from "@/lib/mongodb";
import Contact from "@/models/contact-model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    await connectDB();
    const newContact = await Contact.create(body);

    return NextResponse.json(
      {
        msg: ["Message sent successfully!"],
        success: true,
        time: newContact.createdAt,
      },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const errorList = Object.values(error.errors).map((err) => err.message);
      return NextResponse.json(
        { msg: errorList, success: false },
        { status: 400 },
      );
    } else {
      console.error("Error sending message:", error);
      return NextResponse.json(
        { msg: ["Unable to send message."], success: false },
        { status: 500 },
      );
    }
  }
}
