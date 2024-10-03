import { existsSync, writeFile } from "fs";
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

    writeFile(filePath, text, (err) => {
        if (err) {
            console.log(err);
        }
    });
};

await create();