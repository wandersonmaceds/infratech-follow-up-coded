import { randomUUID } from 'node:crypto';
import { getCurrentDateFormatted } from '../utils/date.utils.js';
import { createUserValidator } from '../validators/create-user.validator.js';
import { UserEntity } from '../entities/user.entity.js';

export class CreateUserUseCase {

    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    execute({ name, email, password }) {
        const users = this.userRepository.findAll();
        const emailList = users.map(user => user.email);
    
        const validations = createUserValidator({ name, email, password, emailList });
    
        if(validations.hasErrors) {
            return validations.errors;
        }
    
        const userId = randomUUID();
        const userCreatedDate =  getCurrentDateFormatted();
        const createdUser = new UserEntity(
            userId,
            name,
            email,
            password,
           userCreatedDate,
        );
    
        this.userRepository.save(createdUser);
    
        return createdUser;
    }  
}