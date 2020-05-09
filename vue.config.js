
module.exports={
  
    publicPath:"./",
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',     //设置true，debugger不会报错
    productionSourceMap: process.env.NODE_ENV === 'development',
        chainWebpack: config => {
            config.module
            .rule('scss')
              .test(/\.scss$/)
              .oneOf('vue')
              .resourceQuery(/\?vue/)
              .use('px2rem')
                .loader('px2rem-loader')
                .options({
                  remUnit: 37.5
                })
              
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