//Back-end API RESTful
import Fastify from "fastify";
import cors from '@fastify/cors';
import { appRoutes } from "./routes";


const app = Fastify()
app.register(cors)
app.register(appRoutes)

/**
 * Metodo Http: 
 * Get    -> Consultar informação 
 * Post   -> Criar um novo dado
 * Put    -> Atualizar por completo
 * Patch  -> Atualizar uma informação especifica
 * Delete ->
 *
/**Utilizando o AWAIT para aguardar retornar o resultado da requisição
 * assim precisamos utilizar tambem o ASYNC para que funcione
 */

app.listen({
    port: 3333
}).then(() => {
    console.log('HTTP Server running!')
})