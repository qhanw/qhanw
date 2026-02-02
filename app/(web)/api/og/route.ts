import { NextResponse, NextRequest } from "next/server";

import { getPost, getCodeSnippet } from "@/app/(web)/lib/service";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const slug = searchParams.get("slug")!;
  const group = searchParams.get("group")!;

  const data = (
    group === "code" ? await getCodeSnippet(slug) : await getPost(slug)
  )!.meta?.title;

  return NextResponse.json({ data, slug });
}
