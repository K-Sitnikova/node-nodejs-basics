const parseArgs = () => {
    let res = []
    process.argv.forEach((item) => {
        if (!item.includes('\\')) {
            res.push(item)
        }
    })
    for (let i = 0; i < res.length; i += 2) {
        let key = res[i].replace(/^--/, '')
        let val = res[i + 1]

        console.log(`${key} is ${val}`)
    }
};

parseArgs();