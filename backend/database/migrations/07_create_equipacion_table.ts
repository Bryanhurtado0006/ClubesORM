import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'equipacions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cod_equip')
      table.boolean('encasa').notNullable()
      table.timestamps(true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}