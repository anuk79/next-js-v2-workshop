import { NextResponse } from "next/server";
import { blogPosts } from '../data';

// const blogPosts = [
//     {
//         slug: "hello-world",
//         title: "Hello World!!",
//         body: "hello world, displaying the blog body..."
//     },{
//         slug: "2023-review",
//         title: "Year in review!!",
//         body: "hello world, displaying the blog body..."
//     },{
//         slug: "learn-nextjs",
//         title: "Learn NextJS",
//         body: "hello world, displaying the blog body..."
//     }
// ];

export async function GET(request, context) {
    const { params } = context;
    return NextResponse.json({
        blog: blogPosts.find(post => post.slug === params.id)
    })
}