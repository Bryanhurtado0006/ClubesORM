import { Client } from 'pg'

const Backend_DeportesBD = new Client({
    port: 5433,
    host: 'localhost',
    password: 'root',
    user: 'postgres',
    database: 'Backend_DeportesBD'
})
Backend_DeportesBD.connect()
export default Backend_DeportesBD