const {isAStringType, isAEmptyString, isAFullSpaceString, isAStringGreaterThenTwoCharacters} = require('./stringValidations/stringValidations');

async function validateBasicStringInput(inputString) {
    if (!isAStringType(inputString) ||
        isAEmptyString(inputString) ||
        isAFullSpaceString(inputString) ||
        !isAStringGreaterThenTwoCharacters(inputString)) {
        throw new Error('Erro de validação do campo, favor revisar.');
    }

    return true;
}