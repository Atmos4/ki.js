import { $ } from "bun";
import { minify } from "terser";

// script
await compressWithTerser("src/ki.js", "dist/ki.min.js");
// When bun build is stable, I'll remove terser
//await compressWithBun("src/ki.js", "dist/ki.bun.min.js");

// helpers
async function compressWithTerser(inFile: string, outFile: string) {
  const content = await Bun.file(inFile).text();
  const result = await minify(content, {
    compress: true,
    toplevel: true,
    mangle: true,
  });
  await Bun.write(outFile, result.code!);
  await logResult(Buffer.from(result.code!).length, outFile);
}

async function compressWithBun(inFile: string, outFile: string) {
  const bunBuild = await Bun.build({
    entrypoints: [inFile],
    minify: true,
  });
  const outContent = await bunBuild.outputs[0].arrayBuffer();
  await Bun.write(outFile, outContent);
  await logResult(Buffer.from(outContent).length, outFile);
}

async function logResult(size: number, file: string) {
  const gzip = await $`gzip -c ${file}`.text();
  console.log(`${file}: ${size}B - ${gzip.length}B gz`);
}
