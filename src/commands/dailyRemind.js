const {koishi} = require('../index')
const {segment} = require('koishi-utils')
const {onebot} = require('../utils/bots')
module.exports = () => {
    koishi.command("alarmClock")
        .action(({session}) => {
            koishi.bots[0].sendPrivateMessage('2787200983', "猪猪猪猪猪猪猪起床")
            /*let botList = koishi.bots[0].getGroupMemberMap("792469853").then(res => {
                for (let i in res) {
                    if (i !== '3185128029') {
                        // session.send(segment.at(i) + '猪猪猪猪猪猪猪起床')
                        koishi.bots[0].sendPrivateMessage('2787200983', "猪猪猪猪猪猪猪起床")
                    }
                }
            })*/
            // session.send("sey hello")
        })

}
