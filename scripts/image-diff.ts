// how to use
// run yarn screenshot on `main` and then on your new branch
// edit this file to point the basePath1/2 variables to your screenshot directories
// run tsx image-diff.ts

import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { PNG } from "pngjs"
import pixelmatch from "pixelmatch"
import { asyncFolderWalker } from 'async-folder-walker'

const basePath1 = '../screenshots-main'
const basePath2 = "../screenshots/"

iterateFiles()

async function iterateFiles() {
  const walker = asyncFolderWalker([basePath1])
  let tmpdir = ''

  try {
    tmpdir = os.tmpdir()
    console.log(tmpdir)
    fs.mkdtempSync(tmpdir)
    tmpdir = path.join(tmpdir, "diffs/")
    fs.mkdirSync(tmpdir)
  } catch (e) {
    console.log(e.message)
  }


  for await (const file of walker) {
    if (typeof file == 'string') {
      if (file.includes(".png")) {
        const img1 = PNG.sync.read(fs.readFileSync(file));

        const otherFile = file.replace(basePath1, basePath2)
        const img2 = PNG.sync.read(fs.readFileSync(otherFile));

        const { width, height } = img1;
        const diff = new PNG({ width, height });
        try {
          const result = pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.1 })
          if (result > 0) {
            console.log(result, file, otherFile)

            const dest = tmpdir + path.parse(file).base
            console.log("diff image saved to:")
            console.log(dest)
            fs.writeFileSync(dest, PNG.sync.write(diff));
          }
        } catch (e) {
          console.log(e.message, file)
          const dest = tmpdir + "err-" + path.parse(file).base
          fs.writeFileSync(dest, PNG.sync.write(diff));
        }
      }
    }

  }
}
