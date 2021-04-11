import crypto from 'crypto'
import path from 'path'

import multer, { Multer } from 'multer'

import appPaths from './paths'

export default function multerStorage(): Multer {
  const targetFolder = appPaths.uploadFolder

  const storage = multer.diskStorage({
    destination: targetFolder,
    filename: (req, file, callback) => {
      const hashName = crypto.randomBytes(10).toString('hex')

      callback(null, `${hashName}${path.extname(file.originalname)}`)
    },
  })

  return multer({ storage })
}
