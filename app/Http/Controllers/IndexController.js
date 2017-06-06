"use strict"

const Release = use("App/Model/Release")

class IndexController {

    * index (request, response) {
        const releases = yield Release
            .query()
            .with('hype_events')
            .scope('hype_events', (builder) => {
                builder.where('user_id', request.context.getUserId())
            })
            .fetch()
        yield response.sendView("index", {
            context: request.context,
            releases: releases.toJSON(),
        })
    }

}

module.exports = IndexController
