const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const file = Bun.file("." + new URL(req.url).pathname);
    return new Response(file);
  },
  error() {
    return new Response(null, { status: 404 });
  },
});

console.log(`Visit ${server.url}`);
