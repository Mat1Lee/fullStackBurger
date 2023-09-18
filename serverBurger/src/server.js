const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const path = require('path');
const router = require('./routers/index');
const bodyParser = require('body-parser');

//mongo connect
mongoose.connect('mongodb://127.0.0.1:27017/burger')
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))

require('dotenv').config();

const app = express()
const port = 3005;
const hostname = 'localhost'

app.use(bodyParser.json())

app.use(cors())
app.use(router);

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
});

// import express from "express";
// import expressMiddleware from '@apollo/server/express4'
// import { ApolloServer,ApolloServerPuginDrainHttpServer } from "@apollo/server";
// import bodyParser from "body-parser";
// import cors from 'cors'
// // import ApolloServerPuginDrainHttpServer from'apolo/server'
// const app = express()

// const http = require('node:http')
// const httpServer = http.createServer(app)
// const typeDefs=`#graphql
// type Query{

// }
// `;
// //mô tả dữ liệu
// const resolvers ={
//   Query:{
//     name:()=>{return 'manh'}
//   }
// }
// //
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   plugins:[ApolloServerPuginDrainHttpServer({httpServer})]
// })
// await server.start();
// app.use(cors(),bodyParser.json(),expressMiddleware(server));
// await new Promise((resolvers)=>{httpServer.listen({port:4000},resolvers)})
// console.log('server ready');
