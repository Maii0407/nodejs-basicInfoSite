const http = require( 'http' );
const url = require( 'url' );
const fs = require( 'fs' );

const port = 3000;

const server = http.createServer( ( req, res ) => {
  fs.readFile( 'index.html', ( err, data ) => {
    if (err) {
      res.writeHead( 404, { 'Content-Type': 'text/html' } );
      return res.end();
    }
    res.writeHead( 200, { 'Content-Type': 'text/html' } );
    res.write( data );
    return res.end();
  })
});

server.listen( port, () => {
  console.log( `Server is on port ${ port }` );
});