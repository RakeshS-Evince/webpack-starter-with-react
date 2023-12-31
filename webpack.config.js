const { merge } = require('webpack-merge')
const Dotenv = require('dotenv-webpack');
const commonConfig = require('./webpack.common');
module.exports = (envVars) => {
    const { env } = envVars
    const envConfig = require(`./webpack.${env}.js`)
    const config = merge(commonConfig, envConfig, {
        plugins: [
            new Dotenv({
                path: env !== 'prod' ? './.env' : './.env.production'
            }), // Load environment variables from .env
        ],
    })
    return config
}