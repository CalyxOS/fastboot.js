import * as esbuild from "esbuild";

const entry = "src/index.ts"

await esbuild.build({
    entryPoints: [entry],
    bundle: true,
    sourcemap: true,
    minify: false,
    platform: "browser",
    target: ["chrome126"],
    outfile: "dist/fastboot.cjs",
});

await esbuild.build({
    entryPoints: [entry],
    bundle: true,
    sourcemap: true,
    minify: true,
    platform: "browser",
    target: ["chrome126"],
    outfile: "dist/fastboot.min.cjs"
});

await esbuild.build({
    entryPoints: [entry],
    bundle: true,
    sourcemap: true,
    minify: false,
    platform: "neutral",
    outfile: "dist/fastboot.mjs"
});

await esbuild.build({
    entryPoints: [entry],
    bundle: true,
    sourcemap: true,
    minify: true,
    platform: "neutral",
    outfile: "dist/fastboot.min.mjs"
});
