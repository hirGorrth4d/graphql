const express = require('express');
const fs = require('fs');
const graphRouter = require('./router/graphql')

const app = express ();
app.use(graphRouter)

app.listen(8080, () => {
    console.log('escuchando')
})