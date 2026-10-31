import { neon } from "@neondatabase/serverless";

type InquiryPayload = {
  name?: unknown;
  affiliation?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
};

function clean(value: unknown, limit: number) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as InquiryPayload;
    if (clean(body.website, 200)) {
      return Response.json({ ok: true }, { status: 201 });
    }

    const name = clean(body.name, 60);
    const affiliation = clean(body.affiliation, 100);
    const email = clean(body.email, 160).toLowerCase();
    const message = clean(body.message, 2000);

    if (!name || !email || message.length < 10) {
      return Response.json(
        { error: "이름, 이메일, 10자 이상의 문의 내용을 확인해 주세요." },
        { status: 400 },
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { error: "이메일 형식을 확인해 주세요." },
        { status: 400 },
      );
    }

    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      return Response.json(
        { error: "문의 저장소가 아직 연결되지 않았습니다. 이메일로 연락해 주세요." },
        { status: 503 },
      );
    }

    const sql = neon(databaseUrl);
    await sql`
      CREATE TABLE IF NOT EXISTS inquiries (
        id BIGSERIAL PRIMARY KEY,
        name VARCHAR(60) NOT NULL,
        affiliation VARCHAR(100),
        email VARCHAR(160) NOT NULL,
        message TEXT NOT NULL,
        status VARCHAR(20) NOT NULL DEFAULT 'new',
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `;
    const rows = await sql`
      INSERT INTO inquiries (name, affiliation, email, message)
      VALUES (${name}, ${affiliation || null}, ${email}, ${message})
      RETURNING id
    `;

    return Response.json(
      { ok: true, reference: Number(rows[0].id) },
      { status: 201 },
    );
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Unknown error";
    console.error("Inquiry storage failed", detail);
    return Response.json(
      { error: "메시지를 저장하지 못했습니다. 이메일로 연락해 주세요." },
      { status: 500 },
    );
  }
}
