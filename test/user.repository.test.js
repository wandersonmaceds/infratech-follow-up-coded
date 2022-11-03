import { UserRepository } from "../src/repositories/user.repository.js";

const userRepository = new UserRepository();

userRepository.save({ name: 'Rodrigo', email: 'rodrigo@mail.com', password: '312aleatorio' });
const users = userRepository.listAll();

console.log(users);