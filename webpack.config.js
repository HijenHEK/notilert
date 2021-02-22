const path = require('path');
const { BUILD_MODE, FILE_NAME } = process.env;
const filename = `${FILE_NAME}${BUILD_MODE === 'production' ? '.min' : ''}.js`;

module.exports = {
    mode : BUILD_MODE || 'development',
    module: {

        rules:[
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader'
                }
            }
        ],
        

    },
    entry : [
        './src/index.js' ,
    ],
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename,
        libraryTarget : 'umd',
    },
};