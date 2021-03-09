import { getCustomRepository } from 'typeorm'
import { routerFactory } from '../factories'
import AppointmentsRepository from '../repositories/AppointmentsRepository'
import CreateAppointmentService from '../services/CreateAppointmentService'

const router = routerFactory()

router.get('/', async (req, res) => {
  try {
    const appointmentRepository = getCustomRepository(AppointmentsRepository)
    const appointments = await appointmentRepository.listAll()
    res.json(appointments)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.post('/', async (req, res) => {
  const { provider, date } = req.body

  try {
    const createAppointmentService = new CreateAppointmentService()
    const appointment = await createAppointmentService.execute({
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
