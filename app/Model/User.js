'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

    visitor() {
        return this.hasOne('App/Model/Visitor')
    }

}

module.exports = User

