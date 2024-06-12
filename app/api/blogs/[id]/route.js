import { dbConnect } from "@/lib/dbConnect.js";
import { Blog } from "@/model/blog.model.js";
dbConnect();



import { NextResponse } from "next/server";

export async function GET(req,{params}) {
  console.log(params);
  const { id: blogId } = params;
  console.log(blogId);
  const blog=await Blog.findById(blogId);
  if(!blog){
    return NextResponse.error(new Error('Blog not found'),{status:404});
  }

  console.log(blog);
  return NextResponse.json(
    {
      message:blog,
    }
  );
}