const webpack = require('webpack');
module.exports = {
    output: {
        publicPath: '/'
    },
    plugins: [new webpack.EnvironmentPlugin(['API_ENDPOINT'])]
};