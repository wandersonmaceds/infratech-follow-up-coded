import 'dotenv/config';
import { UserEntity } from '../entities/user.entity.js';
import { FileSystem } from '../utils/fs.utils.js';

const filePath = process.env.STORAGE_FILE_PATH;

export class UserRepository {

    constructor() {
        this.fs = new FileSystem(filePath);
    }

    save(user) {
        const users = this.listAll();
        users.push(user);
        this.fs.save(users);
    }   

    listAll() {
        const users = this.fs.read();
        return users.map(userData => new UserEntity(
            userData.id, 
            userData.name, 
            userData.email, 
            userData.password, 
            userData.createdDate
        ));
    }
}