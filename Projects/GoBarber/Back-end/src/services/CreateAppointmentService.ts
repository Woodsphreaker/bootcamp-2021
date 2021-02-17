import Appointments from '../models/Appointments'
import AppointmentsRepository from '../repositories/AppointmentsRepository'
import { startOfHour, parseISO, isEqual } from 'date-fns'

interface CreateAppointmentDTO {
  provider: string
  date: string
}

class CreateAppointmentService {
  private appointmentRepository: AppointmentsRepository

  constructor(appointmentRepository: AppointmentsRepository) {
    this.appointmentRepository = appointmentRepository
  }

  public execute({ provider, date }: CreateAppointmentDTO): Appointments {
    const parsedDate = startOfHour(parseISO(date))

    const hasAppointmentInSameDay = this.appointmentRepository.findAppointmentByDate(
      {
        date: parsedDate,
        isEqual,
      }
    )

    if (hasAppointmentInSameDay) {
      throw new Error('This appointments is already exists')
    }

    const appointment = this.appointmentRepository.create({
      provider,
      date: parsedDate,
    })

    return appointment
  }
}

export default CreateAppointmentService
