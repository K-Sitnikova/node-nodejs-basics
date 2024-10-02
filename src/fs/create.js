import {writeFile} from "fs/promises"
import { existsSync } from "fs";
import { join, dirname } from "path"; 
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const create = async () => {
    const filePath = join(__dirname, 'files', 'fresh.txt')
    const text = "I am fresh and young";
    if (existsSync(filePath)) {
        throw new Error('FS operation failed')
    }

    try {
        await writeFile(filePath, text);
    } catch (error) {
        console.error("Error writing file:", error);
    }
};

await create();