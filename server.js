const Express = require('express')
const bodyParser = require('body-parser')

const dotEnv = require('dotenv')
const cors = require('cors')

const graphqlHttp = require('express-graphql')
const {
    buildSchema
} = require('graphql')

const mongoose = require('mongoose')
const connectDB = require('./database/connection.js');

const app = Express()

dotEnv.config();

// Middleware

app.use(cors());

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

// Database

connectDB();

// GraphQL endpoint
/* 
app.use(
    '/database',
    graphqlHttp({
        schema: buildSchema(`
          
      `),
        rootValue: {


        },
        graphiql: true
    })
);
 */

// Port

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Running port: ${PORT}`);
});