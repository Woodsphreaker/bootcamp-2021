import { EntityRepository, Repository } from 'typeorm'
import Appointment from '../models/Appointments'

interface FindByDateDTO {
  date: Date
}

interface CreateAppointmentDTO {
  provider: string
  date: Date
}

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  public async listAll(): Promise<Appointment[]> {
    const appointments = await this.find()
    return appointments
  }

  public async add({
    provider,
    date,
  }: CreateAppointmentDTO): Promise<Appointment> {
    const appointment = this.create({ provider, date })
    await this.save(appointment)
    return appointment
  }

  public async findAppointmentByDate({
    date,
  }: FindByDateDTO): Promise<Appointment | null> {
    const foundedAppointment = await this.findOne({
      where: { date },
    })

    return foundedAppointment || null
  }
}

export default AppointmentsRepository
