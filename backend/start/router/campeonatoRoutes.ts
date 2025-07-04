import Route from '@adonisjs/core/services/router'
import CampeonatoController from '../../app/controllers/CampeonatoController.ts'

const campeonato = new CampeonatoController()

Route.post('/campeonatos', campeonato.crear)
Route.get('/campeonatos', campeonato.listar)
Route.get('/campeonatos/:CodCamp', campeonato.listarId)
Route.put('/campeonatos/:CodCamp', campeonato.actualizar)
Route.delete('/campeonatos/:CodCamp', campeonato.eliminar)
