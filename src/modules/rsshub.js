const {koishi} = require('../index')

module.exports = () => {
    koishi
        .group("792469853")
        .on("message", session => {
            session.send(session.content)
        })
}
