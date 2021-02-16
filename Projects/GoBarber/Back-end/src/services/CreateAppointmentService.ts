import Appointments from '../models/Appointments'
import AppointmentsRepository from '../repositories/AppointmentsRepository'

interface CreateAppointmentDTO {
  provider: string
  date: Date
  isEqual: (date: Date, compareDate: Date) => boolean
}

class CreateAppointmentService {
  private appointmentRepository: AppointmentsRepository

  constructor(appointmentRepository: AppointmentsRepository) {
    this.appointmentRepository = appointmentRepository
  }

  public execute({
    provider,
    date,
    isEqual,
  }: CreateAppointmentDTO): Appointments {
    const hasAppointmentInSameDay = this.appointmentRepository.findAppointmentByDate(
      {
        date,
        isEqual,
      }
    )

    if (hasAppointmentInSameDay) {
      throw new Error('This appointments is already exists')
    }

    const appointment = this.appointmentRepository.create({
      provider,
      date,
    })

    return appointment
  }
}

export default CreateAppointmentService
