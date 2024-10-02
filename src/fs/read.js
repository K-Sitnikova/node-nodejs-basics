import {existsSync, readFileSync } from "fs";
import { dirname, join } from "path"; 
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const read = async () => {
    const fileForRead = join(__dirname, 'files', 'fileToRead.txt')

    if(!existsSync(fileForRead)) {
        throw new Error('FS operation failed')
    }

    const textFromFile = readFileSync(fileForRead, 'utf-8')
    console.log(textFromFile)
};

await read();