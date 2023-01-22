import { prisma } from "./lib/prisma"
import { FastifyInstance } from "fastify"


export async function appRoutes(app: FastifyInstance){

    app.get('/hello',async ()=>{
        return 'hello word'
    
        const habits = await prisma.habit.findMany()
    
        return habits
    })
    
}

