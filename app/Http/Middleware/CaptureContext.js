'use strict'

const Context = use ("App/Lib/Context/Context")
const Visitor = use ("App/Model/Visitor")

class CaptureContext {

    * handle (request, response, next) {
        const user = yield request.auth.getUser()
        const context = new Context(user, request.ip())

        // If there is no user, we check to see if we need to create a visitor
        if (!context.isAuthenticated()) {
            const visitor = yield Visitor.findOrCreate({
                'ip_address': request.ip()
            },
            {
                'ip_address': request.ip()
            })
            context.setVisitor(visitor)
        }

        request.context = context
        yield next
    }

}

module.exports = CaptureContext

