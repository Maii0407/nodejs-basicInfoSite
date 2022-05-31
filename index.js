const http = require( 'http' );
const url = require( 'url' );
const fs = require( 'fs' );

const port = 3000;

const server = http.createServer( ( req, res ) => {
  if ( req.url === '/' ) {
    fs.readFile( 'index.html', ( err, data ) => {
      res.writeHead( 200, { 'Content-Type': 'text/html' } );
      res.write( data );
      return res.end();
    } )
  } else if ( req.url === '/about' ) {
    fs.readFile( 'about.html', ( err, data ) => {
      res.writeHead( 200, { 'Content-Type': 'text/html' } );
      res.write( data );
      return res.end();
    } )
  } else if ( req.url === '/contactMe' ) {
    fs.readFile( 'contactMe.html', ( err, data ) => {
      res.writeHead( 200, { 'Content-Type': 'text/html' } );
      res.write( data );
      return res.end();
    } )
  } else {
    fs.readFile( '404.html', ( err, data ) => {
      res.writeHead( 404, { 'Content-Type': 'text/html' } );
      res.write( data );
      return res.end();
    } )
  }
});

server.listen( port, () => {
  console.log( `Server is on port ${ port }` );
});