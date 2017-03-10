var webpack = require('webpack');
var glob = require('glob');
var path = require('path');
// 目录
var path = require('path');
var packPath = path.join(__dirname, './dist');
// clean
var CleanWebpackPlugin = require('clean-webpack-plugin');

var webpackConfig = {
    entry: {},
    output: {
        path: packPath,
        filename: '[name]/index.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['eslint-loader']
        }]
    },
    plugins: [
        // 清空
        new CleanWebpackPlugin(packPath, {
            root: __dirname,
            verbose: true, 
            dry: false
        })
    ]
};

// 获取指定路径下的入口文件
function getEntries(globPath) {
    var files = glob.sync(globPath),
        entries = {};

    files.forEach((filepath) => {
        var split = filepath.split('/'),
            name = split[split.length - 2];

        entries[name] = [];

        entries[name].push(path.resolve(__dirname, `./src/${name}/index.js`));
    });

    return entries;
}
        
var entries = getEntries('src/**/index.js');
Object.keys(entries).forEach((name) => {
    webpackConfig.entry[name] = entries[name];
})

module.exports = webpackConfig;