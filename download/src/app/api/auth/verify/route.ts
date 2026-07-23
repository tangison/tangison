import { NextRequest, NextResponse } from "next/server";

/**
 * Verify the preview auth cookie is valid.
 * Used by the gateway page to check session status.
 */
export async function GET(request: NextRequest) {
  const cookie = request.cookies.get("preview_auth");

  if (!cookie?.value) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  try {
    const decoded = Buffer.from(cookie.value, "base64").toString("utf-8");
    const secret = process.env.PREVIEW_SECRET || "tangison-preview-2026";

    // Token format: username:timestamp:secret
    const parts = decoded.split(":");
    if (parts.length !== 3 || parts[2] !== secret) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    // Check token age (max 24 hours)
    const timestamp = parseInt(parts[1], 10);
    const age = Date.now() - timestamp;
    if (age > 86400000) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    return NextResponse.json({ authenticated: true }, { status: 200 });
  } catch {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
