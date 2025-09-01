const {
    addNoteHandler,
    getAllNoteHandler, 
    getNoteByIdHandler,
    editNoteHandler,
    deleteNoteHandler } = require('./handler');

const router = [
    {
        method :'POST',
        path : '/notes',
        handler : addNoteHandler,
    },
    {
        method :'GET',
        path : '/notes',
        handler : getAllNoteHandler,
    },
    {
        method :'GET',
        path : '/notes/{id}',
        handler : getNoteByIdHandler,
    },
    {
        method :'PUT',
        path : '/notes/{id}',
        handler : editNoteHandler,
    },
    {
        method :'DELETE',
        path : '/notes/{id}',
        handler : deleteNoteHandler,
    },
]

module.exports = router;