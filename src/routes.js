const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')

routes.get('/players', UserController.index)
routes.get('/players/:id', UserController.getUserbyId)
routes.get('/ranking', UserController.getRanking)
routes.post('/questions', UserController.questions)
routes.post('/players', UserController.createPlayer)
routes.post('/logon', UserController.logon)
routes.put('/score', UserController.updateScore)
routes.put('/maxScore', UserController.updateMaxScore)
routes.put('/updateSenha', UserController.updateSenha)

module.exports = routes