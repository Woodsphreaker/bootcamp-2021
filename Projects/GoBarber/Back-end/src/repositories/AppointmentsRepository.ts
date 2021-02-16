import Appointment from '../models/Appointments'

interface Func {
  (date: Date, compare: Date): boolean
}

class AppointmentsRepository {
  constructor() {
    this.appointment = []
  }

  private appointment: Appointment[]

  public list(): Appointment[] {
    return this.appointment
  }

  public create(provider: string, date: Date): Appointment {
    const appointment = new Appointment(provider, date)

    this.appointment.push(appointment)

    return appointment
  }

  public findAppointmentByDate(date: Date, isEqual: Func): Appointment | null {
    const foundedAppointment = this.appointment.find((appointment) =>
      isEqual(date, appointment.date)
    )

    return foundedAppointment || null
  }
}

export default AppointmentsRepository
