import type { BunRequest } from "bun";

export default function handler(req: BunRequest): Response {
  return new Response("example");
}
