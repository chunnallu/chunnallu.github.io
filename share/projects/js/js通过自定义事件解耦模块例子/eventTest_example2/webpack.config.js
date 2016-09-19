var path = require('path');  //加载nodejs的路径处理模块
var webpack = require('webpack');
module.exports = {
    entry: './es6/index.js',
    output: {
        path: __dirname,        //__dirname是一个nodejs变量，表示当前js文件所在的目录
        filename: './bundle.js'
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, 'es6'),    //配置文件目录下的es6文件夹作为js源代码文件夹
                loader: 'babel-loader' ,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.OldWatchingPlugin()
    ]
};
