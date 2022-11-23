import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Dado from '../../Models/Dado'
import DadoValidator from '../../Validators/DadoValidator'

export default class DadosController {
  public async index({ }: HttpContextContract) {
    const topic = await Dado.all()
    return topic
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(DadoValidator)
    const topic = await Dado.create({ ...data })
    return topic
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const topic = await Dado.findOrFail(params.id)
      return topic
    } catch (error) {
      response.status(400).send("Tópico não encontrado!!!")
    }
  }

  public async update({ request, params, response }: HttpContextContract) {
    const { title, message } = await request.validate(DadoValidator)
    try {
      const topic = await Dado.findOrFail(params.id)
      topic.title = title
      topic.message = message
      await topic.save()
      return topic

    } catch (error) {
      response.status(400).send("Título Inválido!!!")
    }
  }


  public async destroy({ params, response }: HttpContextContract) {
    try {
      const topic = await Dado.findOrFail(params.id)
      await topic.delete()
      return topic
    } catch (error) {
      response.status(400).send("Tópico não encontrado!!!")
    }
  }
}