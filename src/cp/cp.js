import cp from 'child_process'
import path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const scriptsPath = path.join(__dirname, 'files', 'script.js')
const arv = process.argv

const spawnChildProcess = async (args) => {
    const child = cp.spawn('node', [scriptsPath, ...args], {
        stdio: ['pipe', 'pipe']
    })
    child.stdin.pipe(process.stdin)
    child.stdout.pipe(process.stdout)
};

// Put your arguments in function call to test this functionality
spawnChildProcess(arv);
