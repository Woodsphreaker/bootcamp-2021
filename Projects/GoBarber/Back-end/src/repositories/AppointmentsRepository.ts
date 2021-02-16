import Appointment from '../models/Appointments'

interface FindByDateDTO {
  date: Date
  isEqual: (date: Date, compare: Date) => boolean
}

interface AppointmentDTO {
  provider: string
  date: Date
}

class AppointmentsRepository {
  constructor() {
    this.appointment = []
  }

  private appointment: Appointment[]

  public listAll(): Appointment[] {
    return this.appointment
  }

  public create({ date, provider }: AppointmentDTO): Appointment {
    const appointment = new Appointment(provider, date)

    this.appointment.push(appointment)

    return appointment
  }

  public findAppointmentByDate({
    date,
    isEqual,
  }: FindByDateDTO): Appointment | null {
    const foundedAppointment = this.appointment.find((appointment) =>
      isEqual(date, appointment.date)
    )

    return foundedAppointment || null
  }
}

export default AppointmentsRepository
