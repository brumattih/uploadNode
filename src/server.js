const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.use(express.json())

/*app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", 'GET, PUST, POST, DELETE')
    res.header("Access-Control-Allow-Headers", 'CONTENT TYPE')
    app.use(cors())
    next()
})*/
app.use(cors())

app.use(routes)


app.use((error, req, res, next)=>{
    res.status(error.status || 500)
    res.json({error: error.message})
})

app.listen(process.env.PORT || 3000, () => console.log('Server is running'))