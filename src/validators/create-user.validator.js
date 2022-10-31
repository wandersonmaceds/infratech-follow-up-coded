import validator from 'validator';

function validateName(name) {
    if(validator.isEmpty(name)) {
        return {
            field: 'name',
            message: 'field cannot be empty'
        }
    }
    return name;
}

function validatePassword(password) {
    if(!validator.isLength(password, { min: 8 })) {
        return {
            field: 'password',
            message: 'password must have at least 8 chars'
        }
    }

    return password;
}

function validateEmail(email, emailList) {
    if(!validator.isEmail(email)) {
        return {
            field: 'email',
            message: 'email is invalid'
        }
    }

    if(emailList.includes(email)){
        return {
            field: 'email', 
            message: 'email already taken'
        };
    }

    return email;
}

export function createUserValidator({ name, email, password, emailList }) {
    const validationObject = {
        hasErrors: false,
        errors: [],
        data: { name, email, password }
    };

    const nameValidation = validateName(name);
    const emailValidation = validateEmail(email, emailList);
    const passwordValidation = validatePassword(password);

    [
        nameValidation, 
        emailValidation, 
        passwordValidation
    ].forEach(validationResult => {    
        if(typeof validationResult !== 'string') {
            validationObject.errors.push(validationResult);
        }
    });

    validationObject.hasErrors = validationObject.errors.length > 0;

    return validationObject

}