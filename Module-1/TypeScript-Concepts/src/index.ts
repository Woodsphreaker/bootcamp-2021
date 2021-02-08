import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({message: 'Hello TS'})
})

app.listen(3333, () => {
  console.log('app running on port 3333')
})