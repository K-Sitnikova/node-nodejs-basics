import zlib from 'zlib'
import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const decompress = async () => {
    const filePath = path.join(__dirname, 'files', 'archive.gz')
    const fileOutPath = path.join(__dirname, 'files', 'fileToCompress.txt')
    const inputFile = fs.createReadStream(filePath)
    const outputFile = fs.createWriteStream(fileOutPath, {encoding: 'utf-8'})
    inputFile.pipe(zlib.createUnzip()).pipe(outputFile)

};

await decompress();