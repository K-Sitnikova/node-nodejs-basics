const parseEnv = () => {
    const preffix = "RSS_"
    const variables = Object.entries(process.env).filter(([key, val]) => key.startsWith(preffix)).map(([key, val]) => `${key}=${val}`).join(";")
    console.log(variables)
};

parseEnv();