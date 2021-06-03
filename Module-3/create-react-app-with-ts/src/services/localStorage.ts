interface IStorageProps {
  storageName: string
  value?: {} | string
}

export const saveToStorage = ({ storageName, value }: IStorageProps): void => {
  localStorage.setItem(storageName, JSON.stringify(value))
}

export const removeFromStorage = ({
  storageName,
}: Omit<IStorageProps, 'value'>): void => {
  const storage = localStorage.getItem(storageName)

  if (storage) {
    localStorage.removeItem(storageName)
  }
}

export const loadFromStorage = ({
  storageName,
}: Omit<IStorageProps, 'value'>): [] => {
  const storage = localStorage.getItem(storageName)

  if (storage) {
    const storageData = JSON.parse(localStorage.getItem(storageName) || '')
    return storageData
  }

  return []
}
