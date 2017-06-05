"use strict"

const Schema = use("Schema")

class ShoesTableSchema extends Schema {

    up () {
        this.create("releases", (table) => {
            table.increments()
            table.string("name")
            table.text("description")
            table.string("image")
            table.timestamp('release_date')
            table.integer("hype")
            table.timestamps()
        })
    }

    down () {
        this.drop("releases")
    }

}

module.exports = ShoesTableSchema
