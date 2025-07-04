import Route from '@adonisjs/core/services/router'
import DemarcacionController from '../../app/controllers/DemarcacionController.js'

// Instancia del controlador
const demarcacion = new DemarcacionController()

Route.post('/demarcaciones', demarcacion.crear)
Route.get('/demarcaciones', demarcacion.listar)
Route.get('/demarcaciones/:cod_dem', demarcacion.listarId)
Route.put('/demarcaciones/:cod_dem', demarcacion.actualizar)
Route.delete('/demarcaciones/:cod_dem', demarcacion.eliminar)
