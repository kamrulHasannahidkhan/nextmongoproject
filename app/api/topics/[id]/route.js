import connectMongoDB from "@/lib/mongodb";
import Topic from "@/models/topic"; 
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const {id} = await params;
    const {newTitle:title, newDescription: description} = await request.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id,{title, description});
    return NextResponse.json({message: "Topic updated successfully"});
}

export async function GET(request, { params }) {
    const {id} = await params;
    await connectMongoDB();
    const topic = await Topic.findone({_id: id});
    return NextResponse.json(topic, {status: 200});
}