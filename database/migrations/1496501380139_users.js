'use strict'

const Schema = use('Schema')

class UsersTableSchema extends Schema {

    up () {
        this.create('users', (table) => {
            table.increments()
            table.integer("visitor_id")
            table.string("email")
            table.string("avatar")
            table.string("username")
            table.string("provider")
            table.string("provider_id")
            table.string("provider_token")
            table.boolean("admin")
            table.timestamps()
        })
    }

    down () {
        this.drop('users')
    }

}

module.exports = UsersTableSchema
