"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
//const { resolve } = require('path');
const path_1 = require("path");
const fs_1 = require("fs");
//let sourceDir: string = "/mnt/c/Users/justi/workspaceJava/RapidclipseX/DIx/fdox/fdox/src/main/java/de/dominoinformatics/dominoinformatics/fdox"
let sourceDir = process.env.SOURCE_PATH;
let outputDir = "./output/index.html";
let stylePath = process.env.TAILWIND_PURGE_OUTPUT;
let classes = {};
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!fs_1.existsSync("./output")) {
            fs_1.mkdirSync("./output", { recursive: true });
        }
        //create dirs because it will be deleted before this runs
        fs_1.mkdirSync(path_1.dirname(stylePath), { recursive: true });
        //read dirs and extract all classes
        yield readAllDirs(sourceDir);
        //write it to an html document
        yield writeHtml();
    });
}
function writeHtml() {
    const classString = Object.keys(classes).join(" ");
    const htmlString = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <div id="purge" class="${classString}"></div>
  </body>
</html>
   `;
    fs_1.promises.writeFile(outputDir, htmlString);
}
function checkValue(value) {
    return classes[value] === true;
}
/* async function* getFiles(dir: string): any {
  const dirents = await promises.readdir(dir, { withFileTypes: true });
  console.log("lol");

  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      if (extname(res).includes("java")) {
        readFile(res, (err, data) => {
          if (err) throw err;
          console.log(data);
        });
        yield res;
      }
    }
  }
} */
function readAllDirs(dir) {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function* () {
        const dirents = yield fs_1.promises.readdir(dir, { withFileTypes: true });
        try {
            for (var dirents_1 = __asyncValues(dirents), dirents_1_1; dirents_1_1 = yield dirents_1.next(), !dirents_1_1.done;) {
                const dirent = dirents_1_1.value;
                const res = path_1.resolve(dir, dirent.name);
                if (dirent.isDirectory()) {
                    yield readAllDirs(res);
                }
                else {
                    if (path_1.extname(res).includes("java")) {
                        yield readJavaFile(res);
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (dirents_1_1 && !dirents_1_1.done && (_a = dirents_1.return)) yield _a.call(dirents_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
}
function readJavaFile(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fs_1.promises.readFile(path);
        extractWords("setClassName", '("', '")', res);
        extractWords("addClassName", '("', '")', res);
        extractWords('addClassNames"', '("', '")', res);
    });
}
function extractWords(keyword, start, end, data) {
    return __awaiter(this, void 0, void 0, function* () {
        let index = 0;
        while (index != -1) {
            const currPointer = data.indexOf(keyword, index);
            if (currPointer != -1) {
                //extracting classNames
                const startIndex = data.indexOf(start, currPointer) + start.length;
                const endIndex = data.indexOf(end, currPointer);
                const styles = data.slice(startIndex, endIndex).toString();
                const splitted = styles.split(" ");
                for (const item of splitted) {
                    if (checkValue(item) === false) {
                        classes[item] = true;
                    }
                }
                index = currPointer + 1;
            }
            else {
                index = -1;
            }
        }
    });
}
main();
//# sourceMappingURL=index.js.map