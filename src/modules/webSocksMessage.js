var WebSocketClient = require('websocket').client;
var client = new WebSocketClient();
const {koishi} = require('../index')

module.exports = () => {
    client.on('connectFailed', function (error) {
        console.log('Connect Error: ' + error.toString());
    });
    client.on('connect', function (connection) {
        console.log('WebSocket 连接成功');
        connection.on('error', function (error) {
            console.log("Connection Error: " + error.toString());
        });
        connection.on('close', function () {
            console.log('echo-protocol Connection Closed');
        });
        connection.on('message', function (message) {
            if (message.type === 'utf8') {
                console.log("Received: '" + message.utf8Data + "'");
                let e = JSON.parse(message.utf8Data)
                let data = e.data
                if (e.type === 2003) {
                    koishi.bots[0].sendMessage('792469853', "恭喜!\n" + data.server + "的玩家$" + data.name + "$触发了" + data.serendipity + '\n' + '恭喜这个剑.......三玩家')
                }
            }
        });

        function sendNumber() {
            if (connection.connected) {
                var number = Math.round(Math.random() * 0xFFFFFF);
                connection.sendUTF(number.toString());
                setTimeout(sendNumber, 1000);
            }
        }

        sendNumber();
    });
    client.connect('wss://socket.nicemoe.cn', {});
}
