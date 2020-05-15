
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports={
  
    publicPath:"./",
    outputDir: 'dist',
    assetsDir: 'static',
    // filenameHashing:false,   //静态文件是否加hash
    lintOnSave: process.env.NODE_ENV === 'development',     //设置true，debugger不会报错
    productionSourceMap: process.env.NODE_ENV === 'development',
                chainWebpack: config => {
                  config
                  .plugin('html')
                  .tap(args => {
                    args[0].title= '你想设置的title名字'
                    return args
                  })
                  config.resolve.alias
                    .set('@', resolve('src'))
        
                    config.module
                    .rule('svg')
                    .exclude.add(resolve('src/icons'))
                    .end()
              
                  // config.module
                  //     .rule('scss')
                  //     .oneOf('vue')
                  //     .use('px2rem-loader')
                  //     .loader('px2rem-loader')
                  //     .before('postcss-loader') // this makes it work.
                  //     .options({ remUnit: 75, remPrecision: 8 })
                  //     .end()
              
    config
          // https://webpack.js.org/configuration/devtool/#development
          .when(process.env.NODE_ENV === 'development',
            config => config.devtool('#eval-source-map')
          )
           
        },


        devServer: {
          open: true,
          overlay: {
            warnings: false,
            errors: true
          },
          proxy: {
            '/api': {
              target: 'http://localhost:8080',
              ws: true, 
              changeOrigin: true,
            }
          }
        },
      
     

      
  
}