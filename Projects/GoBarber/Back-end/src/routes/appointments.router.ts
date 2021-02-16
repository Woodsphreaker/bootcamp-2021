import { routerFactory } from '../factories'
import { startOfHour, parseISO, isEqual } from 'date-fns'

import AppointmentsRepository from '../repositories/AppointmentsRepository'

const router = routerFactory()
const appointmentRepository = new AppointmentsRepository()

router.get('/', (req, res) => {
  res.json(appointmentRepository.listAll())
})

router.post('/', (req, res) => {
  const { provider, date } = req.body

  const parsedDate = startOfHour(parseISO(date))
  const hasAppointmentInSameDay = appointmentRepository.findAppointmentByDate({
    date: parsedDate,
    isEqual,
  })

  if (hasAppointmentInSameDay) {
    return res
      .status(400)
      .json({ message: 'This appointments is already exists' })
  }

  const appointment = appointmentRepository.create({
    provider,
    date: parsedDate,
  })

  res.json(appointment)
})

router.put('/', (req, res) => {
  res.json({ message: 'route2' })
})

router.delete('/', (req, res) => {
  res.json({ message: 'route3' })
})

export default router
