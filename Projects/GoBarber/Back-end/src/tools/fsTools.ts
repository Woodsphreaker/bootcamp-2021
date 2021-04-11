import { stat, unlink } from 'fs'
import path from 'path'

export const deleteFile = async (
  folderPath: string,
  filename: string
): Promise<string> => {
  const targetPath = path.join(folderPath, filename)

  const fileExists = await new Promise((resolve) => {
    stat(targetPath, (err) => (err ? resolve(false) : resolve(true)))
  })

  if (fileExists) {
    return await new Promise((resolve, reject) => {
      unlink(targetPath, (err) =>
        err ? reject(err) : resolve(`the file ${filename} was deleted`)
      )
    })
  }

  return `the file ${filename} not found on ${folderPath} `
}
