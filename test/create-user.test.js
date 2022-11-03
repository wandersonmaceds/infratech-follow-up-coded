import { CreateUserUseCase } from "../src/use-cases/create-user.js";

const userRepositoryMock = {
    findAll: () => [],
    save: (user) => user,
}

const createUserUseCase = new CreateUserUseCase(userRepositoryMock);

const user1 = createUserUseCase.execute({ name: 'Matheus', email: 'matheus@mail.com', password: '12312378' });
const user2 = createUserUseCase.execute({ name: '', email: 'matheus-mail.com', password: '312378' });

console.log(user1);
console.log(user2);