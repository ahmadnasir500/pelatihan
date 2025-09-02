const Hapi = require('@hapi/hapi');
const notes = require('./api/notes');
const NoteService = require('./services/inmemory/NoteService');

const init = async () =>{
    const noteService = new NoteService();
    server = Hapi.server({
        port: 5000,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        routes: {
            cors:{
                origin: ['*'],
            }
        }
    })

    await server.register({
        plugin: notes,
        options: {
            service: noteService,
        },
    })

    server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}


process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();