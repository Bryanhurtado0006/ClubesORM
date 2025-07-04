import Jugador from '../models/jugador.ts'

export default class JugadorService {
  async crear(datos) {
    return await Jugador.create(datos)
  }

  async listar() {
    return await Jugador.all()
  }

  async listarId(CodJug) {
    return await Jugador.find(CodJug)
  }

  async actualizar(CodJug: number, datos: { club: string, jugador: string, dorsal: number, CodPais: string, cod_dem: number }) {
    const item = await Jugador.find(CodJug)
    if (!item) return null
    item.club = datos.club
    item.jugador = datos.jugador
    item.dorsal = datos.dorsal
    item.cod_pais = datos.CodPais
    item.cod_dem = datos.cod_dem
    await item.save()
    return item
  }

  async eliminar(CodJug: number) {
    const item = await Jugador.find(CodJug)
    if (item) {
      await item.delete()
      return 'Eliminado'
    } else {
      return 'No encontrado'
    }
  }


  /*Obtener jugadores por país (CodPais) ordenados por nombre
      -util cuando se quiere listar todos los jugadores de un país específico, organizados.

      .where('CodPais', CodPais): Filtra los jugadores que pertenecen a un país específico.

      .orderBy('jugador', 'asc'): Ordena alfabéticamente por el nombre del jugador.

      */

  async listarPorPaisOrdenado(CodPais: number) {
    return await Jugador.query()
      .where('CodPais', CodPais)
      .orderBy('jugador', 'asc')
  }


/*  innerJoin cuando estés seguro de que los datos
 están relacionados y necesitas solo coincidencias exactas.


 leftJoin si quieres que aparezcan todos los
 datos de la tabla principal aunque no tengan relación.
 */


  async listarJugadoresConClubYPais() {
  return await Jugador.query()
    .leftJoin('paises', 'jugadors.CodPais', 'paises.CodPais')
    .select(
      'jugadors.jugador',
      'jugadors.club', // Esto es texto, no FK
      'paises.NombrePais as pais_nombre'
    )
}




}
