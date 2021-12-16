/**
 * @dependencies 导入依赖
 */
const {App} = require('koishi') // koishi 机器人库
const koishiConfig = require('./koishi.config')
const sysLog = require('./utils/sysLog') // sysLog 保存日志
const {resolve} = require("path")
/**
 * @instance App koishi实例
 */
// Adapter
require('koishi-adapter-onebot')
// App
const koishi = new App(koishiConfig)
// Database
// Hack QQ channel
// koishi.plugin(require('./plugins/qq-channel-patch'), {})
koishi.plugin(require('koishi-plugin-mysql'), {
    host: "rymaker.cn", port: "46812", user: "sun", password: "550312171", database: "ruoyi"
})
koishi.plugin(require('koishi-plugin-schedule'))
koishi.plugin(require('koishi-plugin-webui'))
koishi.plugin(require("koishi-plugin-rss"))
/**
 * @module autoLoads
 */
require('./commands/_index')
require('./modules/_index')
const {WsClient} = require("koishi-adapter-onebot");
koishi.start().then(() => {
    sysLog('🌈', 'Koishi 启动成功')
})

module.exports = {
    name: 'index', // 导出 App 实例
    App: koishi, ctx: koishi, koishi,
}
