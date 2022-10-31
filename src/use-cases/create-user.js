import { randomUUID } from 'node:crypto';
import { getCurrentDateFormatted } from '../utils/date.utils.js';

export function createUser({ name, email, password }) {
    return {
        id: randomUUID(),
        name,
        email,
        password,
        createdDate: getCurrentDateFormatted(),
    }
}