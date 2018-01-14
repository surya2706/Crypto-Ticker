var express = require('express')
var path = require('path')
var socket = require('socket.io')
var axios = require('axios');

var app = express();

var server = app.listen(4000, () => {
    console.log('listening to requests on port 4000')
})

app.use(express.static(path.join(__dirname, 'public')));

var io = socket(server);

io.on('connection', function(socket){
    console.log('made socket connection');
    let data = fetchRequest()
    setInterval(function() {
        data.then(function(response){
            messageData = {
                bitcoin: response.data.prices.BTC,
                etherium: response.data.prices.ETH,
                ripple: response.data.prices.XRP,
                litecoin: response.data.prices.LTC,
                bitcoincash: response.data.prices.BCH
            }
            io.sockets.emit('priceValues', messageData)
        }, errHandler)},
    5000)
})

function fetchRequest() {
    return axios.get('https://koinex.in/api/ticker')
}


var errHandler = function(error) {
    console.log(error);
}