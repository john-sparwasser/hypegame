"use strict"

const AWS = require('aws-sdk')

class AnalyticsController {

    constructor (socket) {
        this.socket = socket
        this.kinesis = new AWS.Kinesis({region: 'us-east-1'})
    }

    onMessage(message) {
        const payload = {
            Data: Buffer.from(message, 'base64'),
            StreamName: 'hypegame',
            PartitionKey: 'analytics'
        }

        this.kinesis.putRecord(payload, function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Successfully Sent!');
            }
        });
        console.log("emitting message")
        this.socket.inRoom('analytics_stream').emit("message", message)
    }

}

module.exports = AnalyticsController

