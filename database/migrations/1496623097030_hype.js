'use strict'

const Schema = use('Schema')

class HypeTableSchema extends Schema {

    up () {
        this.create('hype', (table) => {
            table.increments()
            table.integer('release_id')
            table.integer('user_id')
            table.timestamps()
        })
    }

    down () {
        this.drop('hype')
    }

}

module.exports = HypeTableSchema
