import { CreateUserUseCase } from "../use-cases/create-user.js";

export class CreateUserRequest {
    #userRepository;

    constructor(userRepository) {
        this.#userRepository = userRepository;
    }
    async execute(request, response) {
        const { name, email, password } = request.body;

        const createUserUseCase = new CreateUserUseCase(this.#userRepository);
        
        const createdUser = await createUserUseCase.execute({ email, password, name });

        return response.status(201).json(createdUser);
    }

}