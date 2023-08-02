import express from "express";
import Connection from "./connections.js";

class App{
    async init() {
        const app=express()
        const server=new Connection(app)

        await server.start()
        server.routes()
    }
}

const application=new App()
application.init()