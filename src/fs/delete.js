import {existsSync, unlink } from "fs";
import { dirname, join } from "path"; 
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const remove = async () => {
    const fileToDelete = join(__dirname, 'files', 'fileToRemove.txt')

    if(!existsSync(fileToDelete)) {
        throw new Error('FS operation failed')
    }

    unlink(fileToDelete, (err) => {
        if (err) {
            console.log(err)
            return
        }
    })
};

await remove();