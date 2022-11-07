import 'dotenv/config';
import { DBConnection } from "../src/infra/db-connection.js";
import { UserRepository } from "../src/repositories/user.repository.js";
import {CreateUserUseCase} from '../src/use-cases/create-user.js';

const connection = await DBConnection.getInstance(
    process.env.DB_CONNECTION_STRING,
    process.env.DB_NAME
);


const userRepository = new UserRepository(connection);

const createUserUseCase = new CreateUserUseCase(userRepository);
const result = await createUserUseCase.execute({ name: 'Rodrigo', email: 'rodrigo@mail.com', password: '312aleatorio' });

const users = await userRepository.listAll();

console.log(users, result);

await DBConnection.closeConnection();