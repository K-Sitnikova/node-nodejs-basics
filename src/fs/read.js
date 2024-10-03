import {existsSync, readFile } from "fs";
import { dirname, join } from "path"; 
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const read = async () => {
    const fileForRead = join(__dirname, 'files', 'fileToRead.txt')

    if(!existsSync(fileForRead)) {
        throw new Error('FS operation failed')
    }

    readFile(fileForRead, {encoding: 'utf-8'}, (err, data) => {
        if (err) {
            console.log(err)
            return
        } else {
            console.log(data)
        }
    })
    
};

await read();