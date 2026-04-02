import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // Log the lead data (placeholder for n8n webhook)
  // In production, this would POST to n8n webhook:
  // await fetch(process.env.N8N_WEBHOOK_URL, { method: "POST", body: JSON.stringify(body) })

  return NextResponse.json({ success: true, message: "Lead received" });
}
