import { NextResponse } from "next/server";
import { blogPosts } from './data';

export async function GET(request) {
    return NextResponse.json(blogPosts);
}