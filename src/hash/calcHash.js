import {fileURLToPath} from 'url'
import crypto from "crypto"
import fs from 'fs'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const calculateHash = async () => {
    const hash = crypto.createHash('sha256')
    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt')
    const stream = fs.createReadStream(filePath)
    stream.on('data', chunk => hash.update(chunk))
    stream.on('end', () => console.log(hash.digest('hex')))
};

await calculateHash();