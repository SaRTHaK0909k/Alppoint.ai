import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: String,
  },
  image: {
    type: String,
  },
});

export const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
