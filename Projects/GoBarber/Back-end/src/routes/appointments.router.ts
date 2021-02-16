import { routerFactory } from '../factories'
import { startOfHour, parseISO, isEqual } from 'date-fns'

import AppointmentsRepository from '../repositories/AppointmentsRepository'

const router = routerFactory()
const appointmentRepository = new AppointmentsRepository()

router.get('/', (req, res) => {
  res.json(appointmentRepository.list())
})

router.post('/', (req, res) => {
  const { provider, date } = req.body

  const parsedDate = startOfHour(parseISO(date))
  const hasAppointmentInSameDay = appointmentRepository.findAppointmentByDate(
    parsedDate,
    isEqual
  )

  if (hasAppointmentInSameDay) {
    return res
      .status(400)
      .json({ message: 'This appointments is already exists' })
  }

  // const appointment = {
  //   id: v4(),
  //   provider,
  //   date: parsedDate,
  // }
  const appointment = appointmentRepository.create(provider, parsedDate)

  res.json(appointment)
})
router.put('/', (req, res) => {
  res.json({ message: 'route2' })
})
router.delete('/', (req, res) => {
  res.json({ message: 'route3' })
})

export default router
