import {Worker} from 'worker_threads'
import os from 'os'
import path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const cores = os.cpus().length


const performCalculations = async () => {
    const promises = []
    const pathToWorkerScript = path.join(__dirname, 'worker.js')
    for (let  i = 0; i < cores; i++) {
        let workerData = 10 + i
        promises.push(new Promise((resolve, reject) => {
            const worker = new Worker(pathToWorkerScript, {workerData})
            worker.on('message', (result) => {
                resolve(result)
            })
            worker.on('error', (err) => {
                resolve({ status: 'error', data: null });
            });
            worker.on('exit', (code) => {
                if (code !== 0) {
                    reject({ status: 'error', data: null });
                }
            });
        }))
    }
    Promise.all(promises).then((res) => console.log(res))
};


await performCalculations()
