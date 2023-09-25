import dbConnect from "@/utils/dbConnect";
import ContactModel from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        const body = req.json();
        await dbConnect;

        await ContactModel.create(body);

        return NextResponse.json(
            {
                message: "Message sent successfully!"
            }, {
            status: 200
        })
    }
    catch (e) {
        return NextResponse.json(
            { message: "Server Error, Please try again later" },
            { status: 500 }
        )
    }
}
