import { Router } from 'express';
import { DBConnection } from '../../infra/db-connection.js';
import { UserRepository } from '../../repositories/user.repository.js';
import { CreateUserRequest } from '../create-user.request.js';
import { DeleteUserRequest } from '../delete-user.request.js';

const usersRoutes = new Router();

const connection = await DBConnection.getInstance();
const userRepository = new UserRepository(connection);

usersRoutes.post('/account', (request, response) => 
    new CreateUserRequest(userRepository).execute(request, response)
);

usersRoutes.delete('/account/:id', (request, response) => 
    new DeleteUserRequest(userRepository).execute(request, response)
);

export { usersRoutes };