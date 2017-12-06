const express = require('express')
const postgraphql = require('postgraphql').postgraphql

const app = express()

const pgConfig = {
  user: 'mangir',
  password: '12345',
  host: '192.168.54.21',
  post: '5432',
  database: 'mangir'
}
const config = { graphiql: true, pgDefaultRole: 'mangir' }

app.use(postgraphql(pgConfig, ['schedule1'], config))

app.listen(4000)
