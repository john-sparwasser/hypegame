"use strict"

class AnalyticController {

    * index (request, response) {
        yield response.sendView("backend")
    }

}

module.exports = AnalyticController

