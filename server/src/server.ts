//Back-end API RESTful
import Fastify from "fastify";
import cors from '@fastify/cors';
import { PrismaClient } from "@prisma/client";


const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

/**
 * Metodo Http: 
 * Get    -> Consultar informação 
 * Post   -> Criar um novo dado
 * Put    -> Atualizar por completo
 * Patch  -> Atualizar uma informação especifica
 * Delete ->
 */
/**Utilizando o AWAIT para aguardar retornar o resultado da requisição
 * assim precisamos utilizar tambem o ASYNC para que funcione
 */
app.get('/hello',async ()=>{
    return 'hello word'

    // const habits = await prisma.habit.findMany({
    //     where:{
    //         title:{
    //             startsWith: 'Beber'
    //         }
    //     }
    // })

    const habits = await prisma.habit.findMany()

    return habits
})

app.listen({
    port: 3333
}).then(() => {
    console.log('HTTP Server running!')
})