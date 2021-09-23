const name = '三五九旅干部培训中心'

module.exports = {
  productionSourceMap: false,
  configureWebpack: config => {
    config.name = name
  }
}
