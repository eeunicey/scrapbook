import express from 'express'
import { config } from './config.js'
const app = express()
const port = config.port


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(config)
})


app.get('/', (req, res) => {
    return res.send("");
})

app.get('/api/health', (req, res) => {
    return res.send({"status": "ok"})
})