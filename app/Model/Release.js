'use strict'

const Lucid = use('Lucid')

class Release extends Lucid {

    hype() {
        return this.hasMany('App/Model/Hype')
    }

}

module.exports = Release

