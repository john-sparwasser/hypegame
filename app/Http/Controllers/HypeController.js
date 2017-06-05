"use strict"

const Hype = use("App/Model/Hype")

class HypeController {

    * increment (request, response) {
        const hype = yield Hype.where({
            'user_id': request.context.getUser(),
            'release_id': request.input('product_id')
        })
        console.log(hype)
        yield response.status(201).send('Created')
    }

}

module.exports = HypeController

