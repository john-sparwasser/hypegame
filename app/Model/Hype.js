'use strict'

const Lucid = use('Lucid')

class Hype extends Lucid {

    release() {
        return this.belongsTo('App/Model/Release')
    }

}

module.exports = Hype

