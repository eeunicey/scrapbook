const express = require('express')
const app = express()
const port = 3000


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


app.get('/', (req, res) => {
    return res.send('')
})

app.get('/api/health', (req, res) => {
    return res.send({"status": "ok"})
})