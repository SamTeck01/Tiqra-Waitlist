import { NextResponse } from "next/server";

const ROLES = ["founder", "earner"] as const;
const INTERESTS = ["validate", "earn", "both"] as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const firstName = String(body.firstName ?? "").trim();
  const lastName = String(body.lastName ?? "").trim();
  const email = String(body.email ?? "").trim().toLowerCase();
  const role = String(body.role ?? "");
  const interest = String(body.interest ?? "");

  if (!firstName || !lastName || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Please fill in your name and a valid email address." }, { status: 400 });
  }
  if (!ROLES.includes(role as (typeof ROLES)[number]) || !INTERESTS.includes(interest as (typeof INTERESTS)[number])) {
    return NextResponse.json({ error: "Please choose how you're joining and what interests you." }, { status: 400 });
  }

  const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
  const project = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;
  const database = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
  const collection = process.env.APPWRITE_WAITLIST_COLLECTION_ID;
  const apiKey = process.env.APPWRITE_API_KEY;

  if (!endpoint || !project || !database || !collection || !apiKey) {
    if (process.env.NEXT_PUBLIC_USE_MOCK_API === "true") {
      console.info("[waitlist] mock mode, not stored:", { firstName, lastName, email, role, interest });
      return NextResponse.json({ ok: true, mock: true });
    }
    console.error("[waitlist] Appwrite is not configured (APPWRITE_WAITLIST_COLLECTION_ID / APPWRITE_API_KEY).");
    return NextResponse.json({ error: "The waitlist is temporarily unavailable. Please try again later." }, { status: 503 });
  }

  const res = await fetch(`${endpoint}/databases/${database}/collections/${collection}/documents`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Appwrite-Project": project,
      "X-Appwrite-Key": apiKey,
    },
    body: JSON.stringify({
      documentId: "unique()",
      data: { firstName, lastName, email, role, interest },
    }),
  });

  if (res.status === 409) {
    // Unique index on email: already on the list is still a success for the user
    return NextResponse.json({ ok: true, existing: true });
  }
  if (!res.ok) {
    console.error("[waitlist] Appwrite error", res.status, await res.text());
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
