import * as fs from "node:fs"
import { build } from "bun";
import noop3 from "noop3";
build({
    entrypoints: ["./src/main.ts"],
    outdir: "dist",
    //minify: true
})
fs.readdir("manifests",(e,l)=>{
    if(e) return;
    l.forEach(e=>fs.copyFile("manifests/"+e,"dist/"+e, noop3))
})