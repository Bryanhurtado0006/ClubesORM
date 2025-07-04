import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'club_jugadors'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .integer('CodClub')
        .unsigned()
        .notNullable()
        .references('CodClub')
        .inTable('clubes')
        .onDelete('CASCADE')

      table
        .integer('CodJug')
        .unsigned()
        .notNullable()
        .references('CodJug')
        .inTable('jugadors')
        .onDelete('CASCADE')

      table.primary(['CodClub', 'CodJug'])

      table.timestamps(true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
