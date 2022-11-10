import { Router } from 'express';
import { DBConnection } from '../../infra/db-connection.js';
import { UserRepository } from '../../repositories/user.repository.js';
import { CreateUserRequest } from '../create-user.request.js';

const usersRoutes = new Router();

const connection = await DBConnection.getInstance();
const userRepository = new UserRepository(connection);

usersRoutes.post('/account', new CreateUserRequest(userRepository).execute);

export { usersRoutes };