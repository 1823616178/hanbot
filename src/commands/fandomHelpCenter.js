/**
 * @module delay
 */
const {koishi} = require('../index')
import {daily} from '../api/jx3'

module.exports = () => {
    koishi
        .command('delay', '日常')
        .action(async ({session}) => {
            let time = new Date().format('yyyy-MM-dd')
            await daily({server: "长安", time: time}).then(res => {
                if (res) {
                  console.log(res.server)
                }
            })
        })
}
