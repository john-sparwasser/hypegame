'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

    visitor() {
        return this.hasOne('App/Model/Visitor')
    }

    // Don't know why I have to do it this way. Not as familiar with Lucid model relations 
    // as I am with Eloquent (Laravel) model relations
    isAdmin() {
        const user = this.toJSON()
        let admin = false
        if (user.roles) {
            user.roles.forEach(role => {
                if (role.name == 'admin') {
                    admin = true
                }
            })
        }
        return admin
    }

}

module.exports = User

