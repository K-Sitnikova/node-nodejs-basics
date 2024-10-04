
import {Transform } from 'stream'

const transform = async () => {
    const transformStream = new Transform({
        transform(data, encoding, callback) {
            const reversed = data.toString().split('').reverse().join('')
            callback(null, reversed)
        }
    })

    process.stdin.pipe(transformStream).pipe(process.stdout)
};

await transform();