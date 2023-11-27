import express from 'express';
import cors from 'cors';
import path from 'path';
import productsRouter from './router/productsRouter.js';
import memberRouter from './router/memberRouter.js';
import cartRouter from './router/cartRouter.js'
import orderRouter from './router/orderRouter.js'
import uploadRouter from './router/uploadRouter.js'
import cookie from 'cookie-parser';
const server = express();
const PORT = 8000;

server.use(express.urlencoded({extended:true}))
server.use(express.json());
// server.use(express.static('uploads'));
server.use('/uploads', express.static(path.join('uploads'))); //static(정적파일) 정의
server.use(cookie());
server.use(cors());
server.use('/products', productsRouter)
server.use('/', memberRouter)
server.use('/carts', cartRouter)
server.use('/order', orderRouter)
server.use('/upload', uploadRouter)

server.listen(PORT);