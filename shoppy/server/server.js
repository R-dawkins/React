import express from 'express';
import cors from 'cors';
import productsRouter from './router/productsRouter.js';
import memberRouter from './router/memberRouter.js'
const server = express();
const PORT = 8000;

server.use(express.urlencoded({extended:true}))
server.use(express.json());
server.use(cors());
server.use('/products', productsRouter)
server.use('/', memberRouter)



server.listen(PORT);