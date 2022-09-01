import { DateTime } from 'luxon'
import { BaseModel, column} from '@ioc:Adonis/Lucid/Orm'

export default class Dado extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cpf: string

  @column()
  public numerocartao: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
