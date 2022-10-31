import { createUser } from "../src/use-cases/create-user.js";

const user1 = createUser({ name: 'Matheus', email: 'matheus@mail.com', password: '123123' });

console.log(user1);