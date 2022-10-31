import { saveUser, listUsers } from "../src/repositories/user.repository.js";
import { createUser } from "../src/use-cases/create-user.js";

const user1 = createUser({ name: 'Rodrigo', email: 'rodrigo@mail.com', password: '312aleatorio' });

saveUser(user1);
const users = listUsers();

console.log(users);