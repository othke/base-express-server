import express from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import morgan from 'morgan'

import rest from './rest'

const app = express()

app.use(helmet())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', rest)

export default app