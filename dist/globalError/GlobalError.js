"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalError = void 0;
const client_1 = require("@prisma/client");
const GlobalError = (error, req, res, next) => {
    let message;
    let status = 400;
    let name;
    if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        const messages = error.message.trim().split('\n');
        const eXactError = messages[messages.length - 1];
        status = 400,
            message = eXactError;
        name = error.name;
    }
    else if (error instanceof client_1.Prisma.PrismaClientValidationError) {
        const messages = error.message.trim().split('\n');
        const eXactError = messages[messages.length - 1];
        status = 400,
            message = eXactError;
        name = error.name;
    }
    else if (error instanceof Error) {
        message = error.message;
        status = 400,
            name = error.name;
    }
    res.status(status).send({
        message,
        status,
        name
    });
};
exports.GlobalError = GlobalError;
