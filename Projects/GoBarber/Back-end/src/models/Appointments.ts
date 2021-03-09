import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column() // varchar implicit
  provider: string

  @Column('time with time zone')
  date: Date
}

export default Appointment
