const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')

routes.get('/players', UserController.index)
routes.get('/ranking', UserController.getRanking)
routes.post('/questions', UserController.questions)
routes.post('/players', UserController.createPlayer)
routes.post('/logon', UserController.logon)
routes.put('/minScore', UserController.updateMinScore)
routes.put('/maxScore', UserController.updateMaxScore)
routes.post('/validaEmail', UserController.ValidaEmail)
routes.put('/updateSenha', UserController.updateSenha)

module.exports = routes