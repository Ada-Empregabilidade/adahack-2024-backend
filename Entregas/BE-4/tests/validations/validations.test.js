const { isAStringType,  isAEmptyString, isAFullSpaceString,isAStringGreaterThenTwoCharacters} = require('../../src/middlewares/validations/validationsFunctions/stringValidations/stringValidations')
const validateEmailInput = require('../../src/middlewares/validations/validationsFunctions/validateEmailInput');
const validateBooleanInput = require('../../src/middlewares/validations/validationsFunctions/validateBooleanInput');
const inputHasInArrayListt = require('../../src/middlewares/validations/validationsFunctions/inputHasInArrayList');;
const validateNumberInput = require('../../src/middlewares/validations/validationsFunctions/validateNumberInput');;

        const isAString = 'i am a string';
        const isAStringEmpty = '';
        const isAStringFullSpace = '    '
        const isAStringNumber = '8'
        const isAStringSymbol = '#$%'
        const isANumber = 5;
        const isABoolean = true;
        const isNull = null;
        const isAArray = [1, 2, 3];
        const isAObject = {key: 'value'};

describe('Test validations to string functions layer', () => {

    test('Should be true if the function param is a string type. Example: Receive "i am a string", to return true.', () => {
        
        expect(isAStringType(isAString)).toBe(true)
        expect(isAStringType(isAStringEmpty)).toBe(true)
        expect(isAStringType(isAStringFullSpace)).toBe(true)
        expect(isAStringType(isAStringNumber)).toBe(true)
        expect(isAStringType(isAStringSymbol)).toBe(true)
    });
    test('Should be false if the function param is a other type, beyond of string. Examplo: Receive a number, array, object, null or boolean, to return false.', () => {
     
        expect(isAStringType(isANumber)).toBe(false)
        expect(isAStringType(isABoolean)).toBe(false)
        expect(isAStringType(isNull)).toBe(false)
        expect(isAStringType(isAArray)).toBe(false)
        expect(isAStringType(isAObject)).toBe(false)
    });
    test('Should be true if the function param is a empty string. Examplo: Receive a "", to return true.', () => {

        expect(isAEmptyString(isAStringEmpty)).toBe(true)

    });
    test('Should be false if the function param isnt a empty string. Examplo: Receive a anything different of "", to return false.', () => {
      
        expect(isAEmptyString(isAString)).toBe(false)
        expect(isAEmptyString(isAStringFullSpace)).toBe(false)


    });
    test('Should be true if the function param is a full space string or false if the function param isnt a full space string. Examplo: Receive "    ", to return true.', () => {
      
        expect(isAFullSpaceString(isAStringFullSpace)).toBe(true)
        expect(isAFullSpaceString(isAString)).not.toBe(true)



    });   
    test('Should be true if the function param is a string with lenght equal or greater then two characters or false if the function param isnt it. Examplo: Receive "i am a string", to return true.', () => {
      
        expect(isAStringGreaterThenTwoCharacters(isAString)).toBe(true)
        expect(isAStringGreaterThenTwoCharacters(isAStringNumber)).not.toBe(true)
        expect(isAStringGreaterThenTwoCharacters(isAStringFullSpace)).toBe(true)



    }); 

})

describe('Test validations to email functions layer', () => {

    test('Should be true if the function param is a valid email. Example: Receive example@email.com, to return true.', () => {
        
        const isAValidEmail = 'example@email.com';

        expect(validateEmailInput(isAValidEmail)).toBe(true)

    });
    test('Should be false if the function param isnt a valid email. Example: Receive "test#email", to return false.', () => {

        const isntAValidEmail = 'test#email';

        expect(validateEmailInput(isntAValidEmail)).toBe(false)
    }) 

})

describe('Test validations to boolean functions layer', () => {

    test('Should be true if the function param is a boolean type. Example: Receive true, to return true.', () => {
        
        expect(validateBooleanInput(isABoolean)).toBe(true)

    });
    test('Should be false if the function param isnt a boolean type. Example: Receive "i am a string", to return false.', () => {
        
        expect(validateBooleanInput(isAStringEmpty)).toBe(false)
        expect(validateBooleanInput(isAObject)).toBe(false)
        expect(validateBooleanInput(isAArray)).toBe(false)
        expect(validateBooleanInput(isNull)).toBe(false)
    }) 

})

describe('Test validations to number functions layer', () => {

    test('Should be true if the function param is a number type. Example: Receive 5, to return true.', () => {
        

        expect(validateNumberInput(isANumber)).toBe(true)
        expect(validateNumberInput(isAStringNumber)).not.toBe(true)

    });
    test('Should be false if the function param isnt a number type. Example: Receive "5", to return false.', () => {
        
        expect(validateNumberInput(isAStringNumber)).toBe(false)
        expect(validateNumberInput(isABoolean)).toBe(false)
        expect(validateNumberInput(isNull)).toBe(false)
        expect(validateNumberInput(isAArray)).toBe(false)
        expect(validateNumberInput(isAObject)).toBe(false)
    }) 

})

describe('Test validations to inputHasInArrayList', () => {

    test('Should be true if the input is a valid entry in the array. Example: Receive 5 to verify in array [3, 5, 7], to return true.', () => {
        

        expect(inputHasInArrayListt(isAArray, 2)).toBe(true)
        expect(inputHasInArrayListt(isAArray, isANumber)).not.toBe(true)

    });
    test('Should be false if the input is a valid entry in the array. Example: Receive 5 to verify in array [2, 3, 4], to return false.', () => {
        
        expect(inputHasInArrayListt(isAArray, isANumber)).toBe(false)
        expect(inputHasInArrayListt(isAArray, isAStringNumber)).toBe(false)
        expect(inputHasInArrayListt(isAArray, isAStringSymbol)).toBe(false)
  
    }) 

})

