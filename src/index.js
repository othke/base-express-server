import app from './app'
import { SERVER_PORT } from './env'

const listener = app.listen(SERVER_PORT || 3000, (lis) => {
    console.log(`Server listen on port: ${listener.address().port}`)
})