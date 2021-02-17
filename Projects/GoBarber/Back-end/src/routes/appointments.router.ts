import { routerFactory } from '../factories'
import AppointmentsRepository from '../repositories/AppointmentsRepository'
import CreateAppointmentService from '../services/CreateAppointmentService'

const router = routerFactory()
const appointmentRepository = new AppointmentsRepository()

router.get('/', (req, res) => {
  res.json(appointmentRepository.listAll())
})

router.post('/', (req, res) => {
  const { provider, date } = req.body

  try {
    const createAppointmentService = new CreateAppointmentService(
      appointmentRepository
    )
    const appointment = createAppointmentService.execute({
      date,
      provider,
    })

    res.json(appointment)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.put('/', (req, res) => {
  res.json({ message: 'route2' })
})

router.delete('/', (req, res) => {
  res.json({ message: 'route3' })
})

export default router
