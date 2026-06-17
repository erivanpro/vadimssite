import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await request.formData();

  return NextResponse.json({ ok: true });
}
