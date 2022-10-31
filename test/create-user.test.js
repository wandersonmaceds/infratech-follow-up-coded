import { createUser } from "../src/use-cases/create-user.js";

const user1 = createUser({ name: 'Matheus', email: 'matheus@mail.com', password: '12312378' });
const user2 = createUser({ name: '', email: 'matheus-mail.com', password: '312378' });

console.log(user1);
console.log(user2);