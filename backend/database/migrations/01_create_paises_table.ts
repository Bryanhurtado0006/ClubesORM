import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'paises'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('CodPais')

      table.string('NombrePais').notNullable()
      table.boolean('Comunitario').notNullable()

      table.timestamps(true)

    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}