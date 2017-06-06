"use strict"

class AnalyticsController {

    constructor (socket) {
        this.socket = socket
    }

    onMessage (message) {
        console.log(message)
    }

}

module.exports = AnalyticsController

