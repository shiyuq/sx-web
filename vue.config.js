const name = '陕西红色传承文化培训有限公司官方网站 党性教育培训 红色文化传承 红色培训教育 事业单位红色教育 事业单位红色培训移动版'

module.exports = {
  productionSourceMap: false,
  configureWebpack: config => {
    config.name = name
  }
}
