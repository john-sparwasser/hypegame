'use strict'

const Schema = use('Schema')

class VisitorsTableSchema extends Schema {

    up () {
        this.create('visitors', (table) => {
            table.increments()
            table.string("ip_address")
            table.timestamps()
        })
    }

    down () {
        this.drop('visitors')
    }

}

module.exports = VisitorsTableSchema
