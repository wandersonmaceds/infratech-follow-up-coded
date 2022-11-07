import { randomUUID } from 'node:crypto';
import { DateTime } from '../utils/date.utils.js';
import { CreateUserValidator } from '../validators/create-user.validator.js';
import { UserEntity } from '../entities/user.entity.js';

export class CreateUserUseCase {

    constructor(userRepository) {
        this.userRepository = userRepository;
        this.createUserValidations = new CreateUserValidator();
    }
    execute({ name, email, password }) {
        const users = this.userRepository.findAll();
        const emailList = users.map(user => user.email);
    
        const validations = this.createUserValidations.execute({ name, email, password, emailList });
    
        if(validations.hasErrors()) {
            return validations.errors;
        }
    
        const userId = randomUUID();
        const userCreatedDate = DateTime.getCurrentDateFormatted('yyyy-MM-dd');
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