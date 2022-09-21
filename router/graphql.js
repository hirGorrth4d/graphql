const fs = require('fs');
const express = require('express');
const {buildSchema} = require('graphql');
const {graphqlHTTP} = require('express-graphql');
const path = require('path');
const {Router} = express;
const {obtenerProducto, agregarProducto, eliminarProducto} = require('../resolvers/index');


const schemaContenido = fs.readFileSync(path.join(__dirname, '../schemas/producto.graphql')).toString();
const schema = buildSchema(schemaContenido)

const graph = graphqlHTTP({
    schema,
    rootValue: {
        obtenerProducto: obtenerProducto,
        agregarProducto: agregarProducto,
        eliminarProducto: eliminarProducto,
    },
    graphiql: true,
})

const graphRouter = Router();
graphRouter.use('/productos', graph)

module.exports =  graphRouter