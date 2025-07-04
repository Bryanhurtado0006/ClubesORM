import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Paise extends BaseModel {
 @column({ isPrimary: true, columnName: 'CodPais' })
 declare CodPais: number

  @column({ columnName: 'NombrePais' })
  declare NombrePais: string

  @column({columnName: 'Comunitario'})
  declare Comunitario: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}