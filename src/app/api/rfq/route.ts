import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * RFQ form handler — placeholder.
 *
 * TODO: Wire to Resend (https://resend.com) once the production env is set up.
 *  - Install `resend` package
 *  - Read RESEND_API_KEY, RESEND_FROM_EMAIL, RESEND_TO_EMAIL from env
 *  - Send the form payload + attachments as a transactional email
 *  - Optionally CC the submitter and add basic spam controls (honeypot, hCaptcha)
 *
 * For now, the route validates the payload, logs it server-side, and returns 200
 * so the form's success state can be exercised end-to-end in development.
 */
export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const payload: Record<string, unknown> = {};
    const attachments: { name: string; size: number; type: string }[] = [];

    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        attachments.push({ name: value.name, size: value.size, type: value.type });
      } else {
        payload[key] = value;
      }
    }

    if (!payload.email || !payload.company || !payload.name || !payload.projectType) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (process.env.NODE_ENV !== "production") {
      console.log("[RFQ] received", { payload, attachments });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[RFQ] error", err);
    return NextResponse.json(
      { ok: false, error: "Internal error" },
      { status: 500 },
    );
  }
}
