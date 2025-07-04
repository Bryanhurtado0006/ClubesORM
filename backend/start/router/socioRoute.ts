import Route from '@adonisjs/core/services/router'
import SocioController from '../../app/controllers/SocioController.ts'

const socio = new SocioController()

Route.post('/socios', socio.crear)
Route.get('/socios', socio.listar)
Route.get('/socios/:cod_socio', socio.listarId)
Route.put('/socios/:cod_socio', socio.actualizar)
Route.delete('/socios/:cod_socio', socio.eliminar)
