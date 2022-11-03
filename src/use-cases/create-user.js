import { randomUUID } from 'node:crypto';
import { listUsers, saveUser } from '../repositories/user.repository.js';
import { getCurrentDateFormatted } from '../utils/date.utils.js';
import { createUserValidator } from '../validators/create-user.validator.js';
import { UserEntity } from '../entities/user.entity.js';

export function createUser({ name, email, password }) {
    const users = listUsers();
    const emailList = users.map(user => user.email);

    const validations = createUserValidator({ name, email, password, emailList });

    if(validations.hasErrors) {
        return validations.errors;
    }

    const userId = randomUUID();
    const userCreatedDate =  getCurrentDateFormatted();
    const createdUser = new UserEntity(
        userId,
        name,
        email,
        password,
       userCreatedDate,
    );

    saveUser(createdUser);

    return createdUser;
}