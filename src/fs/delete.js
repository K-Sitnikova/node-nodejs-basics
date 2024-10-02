import {existsSync, unlinkSync } from "fs";
import { dirname, join } from "path"; 
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const remove = async () => {
    const fileToDelete = join(__dirname, 'files', 'fileToRemove.txt')

    if(!existsSync(fileToDelete)) {
        throw new Error('FS operation failed')
    }

    unlinkSync(fileToDelete)
};

await remove();