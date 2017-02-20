var path = require('path')
var webpack = require('webpack')


module.exports = {
    entry: './src',
    output: {
        //打包时主路径
        path: path.join(__dirname, 'public'), 
        //配置url-loader name的父路径
        publicPath:'/public/',
        filename: 'bundle.js'
    },
    //分出，不打入包的模块
    externals:{
        'react':'react',
        'react-router':'react-router',
        'redux':'redux'
    },
    devServer: {
        inline: true,
        port: 3008
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            }
        })
    ],
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loaders: ['babel?presets[]=react,presets[]=es2015']
        }, {
            test: /\.css$/,
            loaders: ['style', 'css']
        }, {
            test: /\.scss$/,
            // See Autoprefixer-loader
            loaders: ['style', 'css', 'sass']
        }, {
            test: /\.(png|gif|jpe?g|svg)$/i,
            exclude: /node_modules/,
            loader: 'url-loader?limit=1024&name=images/[name].[ext]',
            query: {
                limit: 1000
            }
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            exclude: /node_modules/,
            loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
        }]
    }
}
