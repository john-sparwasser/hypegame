'use strict'

const Context = use ("App/Lib/Context/Context")

class CaptureContext {

    * handle (request, response, next) {
        const user = yield request.auth.getUser()
        const context = new Context(user)
        request.context = context
        yield next
    }

}

module.exports = CaptureContext

