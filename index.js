const shell = require("shelljs");
const path = require("path");

const PROTOC_GEN_TS_PATH = path.resolve("./node_modules/.bin/protoc-gen-ts.cmd");
const OUT_DIR = path.resolve("./generated");

let cmd = [
    `protoc`,
    `--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}"`,
    `--js_out="import_style=commonjs,binary:${OUT_DIR}"`,
    `--ts_out="service=true:${OUT_DIR}"`,
    `addressbook.proto`
];

cmd = cmd.join(" ");

console.log(cmd);

// Run external tool synchronously
if (shell.exec(cmd).code !== 0) {
    shell.echo('Error: command failed');
    shell.exit(1);
} else {
    shell.echo('Command finished');
    shell.exit(0);
}