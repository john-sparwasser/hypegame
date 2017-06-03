'use strict'

const Lucid = use('Lucid')

class Shoe extends Lucid {

    all() {
        return {
            name: "Yeezy Boost 350",
            description: "This is the greatest shoe ever made bruh"
        }
    }

}

module.exports = Shoe

