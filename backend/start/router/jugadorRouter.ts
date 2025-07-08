import Route from '@adonisjs/core/services/router'
import JugadorController from '../../app/controllers/JugadorController.ts'

const jugador = new JugadorController()

//rutas especificas
Route.get('/jugadores/pais/:id', async (ctx) => jugador.listarPorPais(ctx))
Route.get('/jugadores/detallado', async (ctx) => jugador.listarConClubYPais(ctx))
Route.get('/jugadores/estadisticas', async (ctx) => jugador.estadisticasPorClub(ctx))
Route.get('/jugadores/relaciones', async (ctx) => jugador.listarConRelaciones(ctx))
Route.get('/jugadores/nombre-dorsal', async (ctx) => jugador.jugadoresNombreYDorsal(ctx))




//crud dinamico
Route.get('/jugadores', async (ctx) => jugador.listarJugadores(ctx))
Route.post('/jugadores', async (ctx) => jugador.crearJugador(ctx))
Route.get('/jugadores/:CodJug', async (ctx) => jugador.jugadorPorId(ctx))
Route.put('/jugadores/:CodJug', async (ctx) => jugador.actualizarJugador(ctx))
Route.delete('/jugadores/:CodJug', async (ctx) => jugador.eliminarJugador(ctx))




