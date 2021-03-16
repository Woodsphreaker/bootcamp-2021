/* eslint-disable camelcase */
import { getCustomRepository } from 'typeorm'

import AppointmentsRepository from '@Repositories/AppointmentsRepository'
import CreateAppointmentService from '@Services/CreateAppointmentService'

import { Request, Response } from '~/factories/server.factory'

const index = async (req: Request, res: Response): Promise<Response> => {
  try {
    const appointmentRepository = getCustomRepository(AppointmentsRepository)
    const appointments = await appointmentRepository.listAll()
    return res.json(appointments)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

// const show = () => {}

const store = async (req: Request, res: Response): Promise<Response> => {
  const { provider_id, date } = req.body

  try {
    const createAppointmentService = new CreateAppointmentService()
    const appointment = await createAppointmentService.execute({
      date,
      provider_id,
    })

    return res.json(appointment)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

// const update = () => {}

// const destroy = () => {}

export default { index, store }
