import Route from '@adonisjs/core/services/router'
import EntrenClubController from '#controllers/EntrenClubController'

const controller = new EntrenClubController()

Route.post('/entren-club', controller.crear)
Route.get('/entren-club', controller.listar)
Route.delete('/entren-club/:CodEntrenador/:CodClub', controller.eliminar)
