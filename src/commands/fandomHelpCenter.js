/**
 * @module delay
 */
const {koishi} = require('../index')
import {daily} from '../api/jx3'

module.exports = (ctx, options) => {
    koishi.command('delay', '日常')
        .alias("delay")
        .action(async ({session}) => {
            await daily({server: "长安"}).then(res => {
                if (res) {
                    session.getUser().then(user => {
                        console.log(user)
                    })
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
