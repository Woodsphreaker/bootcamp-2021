import express from 'express'
import { helloTD } from './routes' 


const app = express()

app.get('/', helloTD)

app.listen(3333, () => {
  console.log('app running on port 3333')
})


