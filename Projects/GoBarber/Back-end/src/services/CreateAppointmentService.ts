/* eslint-disable camelcase */
import { parseISO, startOfHour } from 'date-fns'
import { getCustomRepository } from 'typeorm'

import Appointments from '@Models/Appointments'
import AppointmentsRepository from '@Repositories/AppointmentsRepository'

interface CreateAppointmentDTO {
  provider_id: string
  date: string
}

class CreateAppointmentService {
  public async execute({
    provider_id,
    date,
  }: CreateAppointmentDTO): Promise<Appointments> {
    const parsedDate = startOfHour(parseISO(date))
    const appointmentRepository = getCustomRepository(AppointmentsRepository)

    const hasAppointmentInSameDay = await appointmentRepository.findAppointmentByDate(
      {
        date: parsedDate,
      }
    )

    if (hasAppointmentInSameDay) {
      throw new Error('This appointments is already exists')
    }

    const appointment = await appointmentRepository.add({
      provider_id,
      date: parsedDate,
    })

    return appointment
  }
}

export default CreateAppointmentService
