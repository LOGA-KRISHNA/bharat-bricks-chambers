import { NextResponse } from "next/server";
import { submitContactInquiry, type ContactSubmission } from "@/lib/contact-service";

const fields: Array<keyof ContactSubmission> = ["name", "email", "phone", "company", "projectType", "productInterest", "message"];

function getSubmission(input: unknown): ContactSubmission | null {
  if (!input || typeof input !== "object") return null;
  const record = input as Record<string, unknown>;
  const data = Object.fromEntries(fields.map((field) => [field, typeof record[field] === "string" ? record[field].trim() : ""])) as ContactSubmission;
  if (fields.some((field) => !data[field])) return null;
  if (data.name.length < 2 || data.company.length < 2 || data.message.length < 10) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return null;
  if (!/^[+\d][\d\s().-]{6,}$/.test(data.phone)) return null;
  if (Object.values(data).some((value) => value.length > 2000)) return null;
  return data;
}

export async function POST(request: Request) {
  try {
    const submission = getSubmission(await request.json());
    if (!submission) return NextResponse.json({ error: "Please complete all fields with valid details." }, { status: 400 });
    await submitContactInquiry(submission);
    return NextResponse.json({ message: "Enquiry received." }, { status: 202 });
  } catch {
    return NextResponse.json({ error: "Unable to process this enquiry right now." }, { status: 400 });
  }
}
