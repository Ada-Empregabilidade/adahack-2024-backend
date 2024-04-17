const inputHasInArrayList = require('./validations/validationsFunctions/inputHasInArrayList');

const ethnicityValidation = (req,res,next) => {

    const listEthnicity = ['branca','preto','parda','indigena','asiatico'];
    const inputEthnicity = req.body.ethnicity;

    inputHasInArrayList(listEthnicity, inputEthnicity) ? next() : new Error({statusCode: 404, message: 'Etnia inválida'});

}

module.exports = ethnicityValidation;
