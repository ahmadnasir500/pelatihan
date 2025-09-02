const router = require('../../router');
const NoteHandler = require('./handler');

module.exports = {
    name: 'api',
    version: '1.0.0',
    register: async (server, { service }) => {
        const noteHandler = new NoteHandler(service);
        server.route(router(noteHandler));
    }
}