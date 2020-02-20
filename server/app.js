const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const port = 4000;

const app = express();

app.use('/graphql', graphqlHTTP({
    schema
}));



app.listen(port, () => {console.log(`Server listening on port ${port}...`)});