import { MongoClient } from 'mongodb';

export class DBConnection {
    static #instance = null

    static async getInstance(connectionString, dbName) {
        if(DBConnection.#instance === null) {
            DBConnection.#instance = new MongoClient(connectionString);
        }

        await DBConnection.#instance.connect();
        const db = DBConnection.#instance.db(dbName)
        return db;
    }

    static async closeConnection() {
        await DBConnection.#instance.close()
    }
}