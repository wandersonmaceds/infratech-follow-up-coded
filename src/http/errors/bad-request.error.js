import { HttpError } from "./http-request.error.js";

export class BadRequestError extends HttpError {
    constructor(message, errors) {
        super(message, 400, errors);
    }
}