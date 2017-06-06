"use strict"

const Hype = use("App/Model/Hype")
const Release = use("App/Model/Release")

class HypeController {

    * increment (request, response) {
        const hype = yield Hype.query().where({
            'user_id': request.context.getUser().id,
            'release_id': request.param('id')
        })
        if (hype.length === 0) {

            yield Hype.create({
                'user_id': request.context.getUser().id,
                'release_id': request.param('id')
            })

            const release = yield Release.find(request.param('id'))
            release.hype++
            yield release.save()

        }

        yield response.status(201).send('Created')
    }

}

module.exports = HypeController

