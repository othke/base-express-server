const dotenv = require('dotenv')

dotenv.config()

const env = (name, optional = false) => {
    const value = process.env[name]
    if (!value && !optional) {
        console.log(`Exit because missing environment variable ${name}`)
        process.exit(1)
    }
    return value
}

module.exports = {
    // Your dotenv var
    SERVER_PORT: env('SERVER_PORT', true),
}
