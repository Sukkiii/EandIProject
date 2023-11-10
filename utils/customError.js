class CustomError extends Error {
   constructor(code, message) {
       super(message);
       this.code = code;
   }
}

class NotFoundError extends Error {
    constructor(message = 'Not found') {
        super(message);
        this.name = 'NotFoundError';
    }
}

class BadRequestError extends Error {
    constructor(message = 'Bad request') {
        super(message);
        this.name = 'BadRequestError';
    }
}

class UnauthorizedError extends Error {
    constructor(message = 'Unauthorized') {
        super(message);
        this.name = 'UnauthorizedError';
    }
}

class ForbiddenError extends Error {
    constructor(message = 'Forbidden') {
        super(message);
        this.name = 'ForbiddenError';
    }
}
class InternalServerError extends Error {
    constructor(message = 'Internal server error') {
        super(message);
        this.name = 'InternalServerError';
    }
}
class ValidationError extends Error {
    constructor(message = 'Validation failed') {
        super(message);
        this.name = 'ValidationError';
    }
}
class DatabaseError extends Error {
    constructor(message = 'Database error') {
        super(message);
        this.name = 'DatabaseError';
    }
}

class NotModifiedError extends Error {
    constructor(message = 'NotModified error') {
        super(message);
        this.name = 'NotModifiedError'
    }
}