import {readdir} from "fs/promises"
import {existsSync } from "fs";
import { dirname, join } from "path"; 
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const list = async () => {
    const fileDir = join(__dirname, 'files')

    if (!existsSync(fileDir)) {
        throw new Error('FS operation failed')
    }
    const filesForRead = await readdir(fileDir)
    const filesName = filesForRead.map((item) => item.replace(/\.\w+$/, ''))
    console.log(filesName)
};

await list();