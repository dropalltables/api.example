import type { BunRequest } from "bun";

export default function handler(req: BunRequest): Response | Promise<Response> {
  return Response.json({ ok: true });
}
