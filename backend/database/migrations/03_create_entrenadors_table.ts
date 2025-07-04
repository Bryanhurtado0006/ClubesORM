import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'entrenadors'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('CodEntrenador')
      table.string('nombre')
      table.string('experiencia')
      table.string('nacionalidad')

      table.timestamps(true)


    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}