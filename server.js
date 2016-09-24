const express = require( 'express' );
const { json } = require( 'body-parser' );
const cors = require( 'cors' );
const config = require( './config' );
const session = require( 'express-session' );
const port = 4000;

const app = express();

const corsOptions = {
    origin: 'http://localhost:4000'
};

app.use( json() );
app.use( cors( corsOptions ) );
app.use( session( { secret: config.secret } ) );
app.use( express.static( __dirname + '/public') );

const routes = require( './controllers/userProfileRoutes' );
routes( app );

app.listen( port, () => console.log( `Listening on ${ port }` ) );
