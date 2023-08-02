import fetch from "node-fetch"
import { createClient } from "redis"
import cacheMiddleware from "./cacheMiddleware.js"

class Connection{
    constructor(app) {
        this.app=app
        this.client=createClient('http://localhost:6379')
        this.port=5000
    }

    async start(){
        this.app.listen(this.port, () => {
            console.log(`Server started on ${this.port}`)
        })
        this.client.on('error', err => console.log('Redis Client Error', err));
        await this.client.connect();
    }

    setResponse(data) {
        return `<h2>${data}</h2>`
    }

    routes(){
        this.app.get('/links', 
        (req, res,next) => cacheMiddleware(req, res, next, this.client, this.setResponse),
        async (req,res, next) => {
            try{
                const response=await fetch(`https://jsonplaceholder.typicode.com/users`)
                const data = await response.json()

                await this.client.set('username', data[0].name);

                res.send(this.setResponse(data[0].name))
            }catch(err) {
                console.log('error is ', err)
            }
        })
    }
}

export default Connection