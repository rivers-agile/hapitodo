'use strict';

const Boom = require('boom');


module.exports = function () {

    return function (request, reply) {

        const todo = request.server.methods.todoModel;

        return todo.row(request.params.filter, (err, todos) => {

            if (err) {
                request.server.log(['error'], err);

                return reply(Boom.badImplementation());
            }

            return reply(todos || {}).code(200);
        });
    };
};
