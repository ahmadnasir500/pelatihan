const Hapi = require('@hapi/hapi');
const routes = require('./api/router');

const init = async () =>{
    server = Hapi.server({
        port: 5000,
        host: 'localhost',
        routes: {
            cors:{
                origin: ['*'],
            }
        }
    })
    server.route(routes);
    
    server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}


process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();