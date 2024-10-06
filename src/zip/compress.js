import zlib from 'zlib'
import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compress = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToCompress.txt')
    const fileOutputPath = path.join(__dirname, 'files', 'archive.gz')
    const inputFile = fs.createReadStream(filePath, {encoding: 'utf-8'})
    const outputFile = fs.createWriteStream(fileOutputPath)
    inputFile.pipe(zlib.createGzip()).pipe(outputFile)

};

await compress();