import 'dotenv/config';
import { UserEntity } from '../entities/user.entity.js';
import { readFromFile, saveOnFile } from '../utils/fs.utils.js';

const filePath = process.env.STORAGE_FILE_PATH;

export function saveUser(user) {
    const users = listUsers();
    users.push(user);
    saveOnFile(filePath, users);
}

export function listUsers() {
    const users = readFromFile(filePath);
    return users.map(userData => new UserEntity(userData.id, userData.name, userData.email, userData.password, userData.createdDate));
}