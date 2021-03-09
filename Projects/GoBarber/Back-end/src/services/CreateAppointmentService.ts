import { parseISO, startOfHour } from 'date-fns'
import { getCustomRepository } from 'typeorm'
import Appointments from '../models/Appointments'
import AppointmentsRepository from '../repositories/AppointmentsRepository'

interface CreateAppointmentDTO {
  provider: string
  date: string
}

class CreateAppointmentService {
  public async execute({
    provider,
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
      provider,
      date: parsedDate,
    })

    return appointment
  }
}

export default CreateAppointmentService
