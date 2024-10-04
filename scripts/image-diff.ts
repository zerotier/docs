// how to use
// run yarn screenshot on `main` and then on your new branch
// edit this file to point the basePath1/2 variables to your screenshot directories
// run tsx image-diff.ts

import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { PNG } from "pngjs"
import  pixelmatch  from "pixelmatch"
import { asyncFolderWalker } from 'async-folder-walker'

const basePath1 =  os.homedir() + '/Downloads/screenshots-main/'
const basePath2 =  os.homedir() + '/Downloads/screenshots-3/'

iterateFiles()

async function iterateFiles () {
  const walker = asyncFolderWalker([basePath1])
  let tmpdir = ''

  for await (const file of walker) {
    if (typeof file == 'string') {
      if (file.includes(".png")) {
        const img1 = PNG.sync.read(fs.readFileSync(file));

        const otherFile = file.replace(basePath1, basePath2)
        const img2 = PNG.sync.read(fs.readFileSync(otherFile));

        const {width, height} = img1;
        const diff = new PNG({width, height});
        const result = pixelmatch(img1.data, img2.data, diff.data, width, height, {threshold: 0.1})
        if (result > 0) {
          console.log(result, file, otherFile)
          if (!tmpdir) {
            tmpdir = path.join(os.tmpdir(), 'diffs-')
            fs.mkdtempSync(tmpdir)
          }

          const dest = tmpdir + path.parse(file).base
          console.log("diff image saved to:")
          console.log(dest)
          fs.writeFileSync(dest, PNG.sync.write(diff));
        }
      }
    }

  }
}
