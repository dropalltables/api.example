# api.example

Template for [api.viruus.zip](https://api.viruus.zip) route submodules.

## Usage

Use this template to create a new route. The repo will be mounted as a submodule under `routes/` in the main [api](https://github.com/dropalltables/api) repo and served at `api.viruus.zip/<name>`.

The entry point is `index.ts`, which must export a default handler:

```ts
import type { BunRequest } from "bun";

export default function handler(req: BunRequest): Response | Promise<Response> {
  return Response.json({ ok: true });
}
```

## License

[AGPL-3.0](LICENSE)
