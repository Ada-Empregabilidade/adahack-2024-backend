const ethnicityValidation = (req,res,next) => {

    const listEthnicity = ['branca','preto','parda','indigena','asiatico'];

    if(!listEthnicity.includes(req.query.ethnicity)){
        const err = new Error('valor para etinia não permitido');
        err.status_code = 400;
        return next(err)
    }
}

module.exports = ethnicityValidation;
