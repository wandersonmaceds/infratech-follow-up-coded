import 'dotenv/config';
import { UserEntity } from '../entities/user.entity.js';
import { FileSystem } from '../utils/fs.utils.js';

const filePath = process.env.STORAGE_FILE_PATH;
const connectionString = process.env.DB_CONNECTION_STRING;
const dbName = process.env.DB_NAME;

export class UserRepository {
    #usersCollection;

    constructor(connection) {
        this.#usersCollection = connection.collection('users');
    }

    async save(user) {
        await this.#usersCollection.insertOne(user);
    }   

    async listAll() {
        const users = await this.#usersCollection.find().toArray();
        return users.map(userData => new UserEntity(
            userData.id, 
            userData.name, 
            userData.email, 
            userData.password, 
            userData.createdDate
        ));
    }
}