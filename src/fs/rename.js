import {existsSync } from "fs";
import { dirname, join } from "path"; 
import { fileURLToPath } from "url";
import fs from "fs"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const rename = async () => {
    const oldfilePath = join(__dirname, 'files', 'wrongFilename.txt')
    const newFilePath = join(__dirname, 'files', 'properFilename.md')

    if(existsSync(newFilePath) || !existsSync(oldfilePath)) {
        throw new Error('FS operation failed')
    }

    fs.rename(oldfilePath, newFilePath, (err) => {
        if (err) {
            console.log(err)
            return
        }
    })
};

await rename();