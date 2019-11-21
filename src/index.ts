//const { resolve } = require('path');
import { resolve, extname } from "path";
import { promises, mkdirSync } from "fs";

let sourceDir: string =
  "/mnt/f/workspaceJava/RapidclipseX/DI/fdox/fdox/src/main/java/de/dominoinformatics/dominoinformatics/fdox";
let outputDir: string = "output/index.html";

let classes: any = {};

async function main() {
  mkdirSync("output", { recursive: true });

  await readAllDirs(sourceDir);
  await writeHtml();
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

  promises.writeFile(outputDir, htmlString);
}

function checkValue(value: string) {
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

async function readAllDirs(dir: string) {
  const dirents = await promises.readdir(dir, { withFileTypes: true });

  for await (const dirent of dirents) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      await readAllDirs(res);
    } else {
      if (extname(res).includes("java")) {
        await readJavaFile(res);
      }
    }
  }
}

async function readJavaFile(path: string) {
  const res = await promises.readFile(path);

  extractWords("setClassName", '("', '")', res);
  extractWords("addClassName", '("', '")', res);
  extractWords('addClassNames"', '("', '")', res);
}

async function extractWords(
  keyword: string,
  start: string,
  end: string,
  data: Buffer
) {
  let index = 0;
  while (index != -1) {
    const currPointer = data.indexOf(keyword, index);
    if (currPointer != -1) {
      //extracting classNames
      const startIndex = data.indexOf(start, currPointer) + start.length;
      const endIndex = data.indexOf(end, currPointer);

      const styles = data.slice(startIndex, endIndex).toString();

      const splitted: string[] = styles.split(" ");

      for (const item of splitted) {
        if (checkValue(item) === false) {
          classes[item] = true;
        }
      }

      index = currPointer + 1;
    } else {
      index = -1;
    }
  }
}

main();
