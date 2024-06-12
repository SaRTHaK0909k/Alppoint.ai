import { dbConnect } from "@/lib/dbConnect.js";
import { Blog } from "@/model/blog.model.js";
import { NextResponse, NextRequest } from "next/server";

dbConnect();

export async function POST(request) {
  const reqBody = await request.json();
  const { title, description, date, image } = reqBody;

  console.log(reqBody);

  const blog = await Blog.create({
    title,
    description,
    date,
    image,
  });

  if (!blog) {
    return NextResponse.error(new Error("Failed to create blog"));
  }

  return NextResponse.json(blog);
}

export async function GET(request) {
  const blogs = await Blog.find({});

  if (!blogs) {
    return NextResponse.error(new Error("Failed to fetch blogs"));
  }

  return NextResponse.json(blogs);
}