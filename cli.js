#!/usr/bin/env node

const { injectFileFragments } = require("./src/index.js");

const [sourceFilePath, destFilePath] = process.argv.slice(2);

if (!sourceFilePath || !destFilePath) {
    console.error("You must provide a Source File Path and a Destination File Path.");
    process.exit(1);
}

injectFileFragments(sourceFilePath, destFilePath);
