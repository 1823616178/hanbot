/**
 * @module delay
 */
const {koishi} = require('../index')
import {daily, checkServer} from '../api/jx3'

module.exports = () => {
    /***
     * 日常
     */
    koishi
        .command("jx3_daily")
        .alias('日常')
        .action(({args, session}) => {
            let time = new Date().format('yyyy-MM-dd')
            let user = koishi.database.getUser()
            if (args.length === 0) {
                session.send("请输入区服")
            } else {
                daily({server: args[0], time: time}).then(res => {
                    if (res) {
                        let data = res
                        session.send("今天是" + data.bot_date + '星期' + data.bot_week + '\n' + "大战是：" + data.dayWar + '\n' + '战场是：' + data.dayBattle)
                    }
                }).catch(e => {
                    session.send('呀！出错了')
                })
            }
        })

    /***
     * 开服检测
     */

    koishi
        .command("jx3_chack")
        .alias('开服检测')
        .action(({args, session}) => {
            if (args.length === 0) {
                session.send("请输入区服")
            } else {
                let arg = args[0]
                checkServer({server: arg}).then(res => {
                    if (res) {
                        if (parseInt(res.status) === 1) {
                            session.send("开服")
                        } else {
                            session.send("未开服")
                        }
                    }
                }).catch(e => {
                    session.send('呀！出错了')
                })
            }
        })
}
