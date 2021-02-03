import { v4 } from 'uuid'

const createRepository = (repository = []) => {
  const showAllItems = () => repository

  const addItem = (item) => {
    const newItem = { id: v4(), ...item }
    repository.push(newItem)
    return newItem
  }

  const updateItem = (id, item) => {
    const foundedItemIndex = repository.findIndex(
      ({ id: itemId }) => itemId === id
    )

    if (foundedItemIndex < 0) {
      throw new Error('Registro não encontrado')
    }

    const currentItem = repository[foundedItemIndex]

    const newItem = {
      ...currentItem,
      ...item,
    }

    repository.splice(foundedItemIndex, 1, newItem)

    return newItem
  }

  const deleteItem = (id) => {
    const foundedItemIndex = repository.findIndex(
      ({ id: itemId }) => itemId === id
    )

    console.log('foundedItemIndex', foundedItemIndex)

    if (foundedItemIndex < 0) {
      throw new Error('Registro não encontrado')
    }

    const currentItem = repository[foundedItemIndex]

    repository.splice(foundedItemIndex, 1)

    return currentItem
  }

  return {
    showAllItems,
    addItem,
    updateItem,
    deleteItem,
  }
}

export default createRepository
