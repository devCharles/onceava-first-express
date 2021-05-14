
const express = require('express')

const kodersRouter = require('./routers/koders')

const server = express()

// middleware
server.use(express.json())
server.use('/koders', kodersRouter)

server.get('/', (request, response) => {
  response.json({
    success: true,
    message: '11G APIv1'
  })
})

server.listen(8080, () => {
  console.log('Server listening in port 8080')
})
