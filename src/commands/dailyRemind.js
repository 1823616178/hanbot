const {koishi} = require('../index')
const {segment} = require('koishi-utils')
const {onebot} = require('../utils/bots')
module.exports = () => {
    koishi.command("alarmClock")
        .action(({session}) => {
            let botList = koishi.bots[0].getGroupMemberMap("323509328").then(res => {
                for (let i in res) {
                    if (i !== '3185128029') {
                        session.send(segment.at(i) + '猪猪猪猪猪猪猪起床')
                    }
                }
            })
            // session.send("sey hello")
        })

}
