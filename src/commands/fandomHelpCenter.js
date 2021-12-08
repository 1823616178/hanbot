/**
 * @module command-fandomHelpCenter
 */
const {koishi} = require('../index')
import {daily} from '../api/jx3'

module.exports = (ctx, options) => {
    koishi.command('delay', '日常')
        .alias("delay")
        .action(({session}) => {
            daily({server: "长安"}).then(res => {
                if (res) {
                    let data = res.data
                    session.send([
                        "✨ 今日日常:" + '\n'
                        + '今天是' + data.date + "星期" + data.week + '\n'
                        + "大战本是:" + data.dayWar,
                    ])
                }
            })
        })
}
