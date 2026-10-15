const fs = require("fs");

if (!fs.existsSync("dist")) {
    fs.mkdirSync("dist");
}

fs.copyFileSync("app.js", "dist/app.js");

console.log("Build completed successfully!");