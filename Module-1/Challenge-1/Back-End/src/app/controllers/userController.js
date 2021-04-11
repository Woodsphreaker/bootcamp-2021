import user from '../../database/user'

const index = (req, res) => {
  const allUsers = user.showAllItems()
  return res.json({ response: 'response for users', allUsers })
}

const create = (req, res) => {
  const { name, age } = req.body
  const newUser = user.addItem({ name, age })

  return res.json({ response: 'added new user', newUser })
}

const update = (req, res) => {
  const { id } = req.params
  const { name, age } = req.body

  try {
    const updatedUser = user.updateItem(id, { name, age })

    return res.json({ response: 'update user', updatedUser })
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

const destroy = (req, res) => {
  const { id } = req.params

  try {
    const newUser = user.deleteItem(id)

    return res.json({ response: 'deleted user', newUser })
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

export default { index, create, update, destroy }
