import { routerFactory } from '../factories'

const router = routerFactory()

router.get('/', (req, res) => {
  console.log(req.body)
  res.json({ message: 'root' })
})
router.get('/route1', (req, res) => {
  res.json({ message: 'route1' })
})
router.get('/route2', (req, res) => {
  res.json({ message: 'route2' })
})
router.get('/route3', (req, res) => {
  res.json({ message: 'route3' })
})

export default router
