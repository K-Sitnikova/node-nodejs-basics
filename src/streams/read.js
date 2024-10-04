import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const read = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt')
    const stream = fs.createReadStream(filePath, {encoding: 'utf-8'})
    stream.on('data', chunk => {
        process.stdout.write(chunk)
    })
    stream.on('end', () => {
        console.log('')
    })
};

await read();