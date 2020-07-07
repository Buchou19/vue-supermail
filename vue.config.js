module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        // @已经被配置成src
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}