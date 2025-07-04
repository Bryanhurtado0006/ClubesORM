import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'demarcacions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cod_dem')
      table.string('demarcacion').notNullable()

      table.timestamps(true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}