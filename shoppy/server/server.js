import express from 'express';
import cors from 'cors';
import productsRouter from './router/productsRouter.js';
import memberRouter from './router/memberRouter.js';
import cartRouter from './router/cartRouter.js'
import orderRouter from './router/orderRouter.js'
import cookie from 'cookie-parser';
const server = express();
const PORT = 8000;

server.use(cookie());
server.use(express.urlencoded({extended:true}))
server.use(express.json());
server.use(cors());
server.use('/products', productsRouter)
server.use('/', memberRouter)
server.use('/carts', cartRouter)
server.use('/order', orderRouter)

server.listen(PORT);