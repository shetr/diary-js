module.exports = {
    entry: './src/js/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }
        ]
    }
}