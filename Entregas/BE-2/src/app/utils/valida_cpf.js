function validaDigitosCPF(cpf){
    return cpf.length === 11 && /^\d+$/.test(cpf);
}

module.exports = validaDigitosCPF;