"use strict"

const Shoe = use("App/Model/Shoe")

class IndexController {

    * index (request, response) {
        const shoes = yield Shoe.all()
        yield response.sendView("index", { shoes: shoes.toJSON() })
    }

}

module.exports = IndexController
