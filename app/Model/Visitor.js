'use strict'

const Lucid = use('Lucid')

class Visitor extends Lucid {

    user() {
        return this.belongsTo('App/Model/User')
    }

}

module.exports = Visitor

