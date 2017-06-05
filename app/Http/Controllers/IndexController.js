"use strict"

const Release = use("App/Model/Release")

class IndexController {

    * index (request, response) {
        const releases = yield Release.all()
        yield response.sendView("index", {context: request.context, releases: releases.toJSON()})
    }

}

module.exports = IndexController
