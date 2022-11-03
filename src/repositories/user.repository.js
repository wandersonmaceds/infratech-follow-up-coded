import 'dotenv/config';
import { UserEntity } from '../entities/user.entity.js';
import { readFromFile, saveOnFile } from '../utils/fs.utils.js';

const filePath = process.env.STORAGE_FILE_PATH;

export class UserRepository {

    save(user) {
        const users = this.listAll();
        users.push(user);
        saveOnFile(filePath, users);
    }   

    listAll() {
        const users = readFromFile(filePath);
        return users.map(userData => new UserEntity(
            userData.id, 
            userData.name, 
            userData.email, 
            userData.password, 
            userData.createdDate
        ));
    }
}