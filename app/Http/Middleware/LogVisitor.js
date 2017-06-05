'use strict'

class LogVisitor {

    * handle (request, response, next) {
        const ip = request.ip()
        console.log(ip)
        yield next
    }

}

module.exports = LogVisitor
