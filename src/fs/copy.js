import {mkdir, readdir, copyFile} from "fs/promises"
import {existsSync } from "fs";
import path, { dirname } from "path"; 
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const copy = async () => {
    const fileDir = path.join(__dirname, 'files')
    const destPath = path.join(__dirname, 'files_copy')

    if (!existsSync(fileDir)) {
        throw new Error('FS operation failed')
    }

    if (existsSync(destPath)) {
        throw new Error('FS operation failed')
    }

    try {
        await mkdir(destPath)
        const filesForCopy = await readdir(fileDir, {withFileTypes: true})
        for (let item of filesForCopy) {
            const FilesFrom = path.join(fileDir, item.name)
            const FilesTo = path.join(destPath, item.name)
            await copyFile(FilesFrom, FilesTo)
        }
    } catch(error) {
        throw new Error("something went wrong")
    }
};

await copy();
