import { writeFileSync, readFileSync, existsSync } from 'node:fs';

export function saveOnFile(path, content) {
    try {
        const fileData = JSON.stringify(content);
        writeFileSync(path, fileData, { encoding: 'utf8' });
    } catch (error) {
        console.error(error);
    }
}

export function readFromFile(path) {
    if(!existsSync(path)) {
        saveOnFile(path, []);
    }
    
    try {
        const fileData = readFileSync(path, { encoding: 'utf8' });
        return fileData === '' ? [] : JSON.parse(fileData);
    } catch (error) {
        console.error(error);
    }
}