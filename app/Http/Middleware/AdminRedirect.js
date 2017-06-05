'use strict'

class AdminRedirect {

    * handle (request, response, next) {
        if (!request.context.isAdmin()) {
            yield response.redirect("/")
        }
        yield next
    }

}

module.exports = AdminRedirect


