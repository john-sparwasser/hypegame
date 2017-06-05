"use strict"

const Release = use ("App/Model/Release")

class ReleaseController {

    * showAddForm (request, response) {
        yield response.sendView("add_release", { context: request.context })
    }

    * addRelease(request, response) {

        const newRelease = {
            "name": request.input('name'),
            "description": request.input('description'),
            "release_date": request.input('release_date'),
            "image": request.input('image'),
            "hype": 0
        }

        yield Release.create(newRelease)

        yield response.sendView("add_release", { message: "Added the new release successfully", context: request.context })
    }

}

module.exports = ReleaseController

