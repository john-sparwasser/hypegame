'use strict'

const Lucid = use('Lucid')

class Hype extends Lucid {

    static get table () {
        return 'hype'
    }

    release() {
        return this.belongsTo('App/Model/Release')
    }

}

module.exports = Hype

