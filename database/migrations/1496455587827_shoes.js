'use strict'

const Schema = use('Schema')

class ShoesTableSchema extends Schema {

    up () {
        this.create('shoes', (table) => {
            table.increments()
            table.string('name')
            table.string('description')
            table.timestamps()
        })
    }

    down () {
        this.drop('shoes')
    }

}

module.exports = ShoesTableSchema
