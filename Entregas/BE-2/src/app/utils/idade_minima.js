function idade_minima(data_nascimento){
    const hoje = new Date();
    const idade = parseInt((hoje-data_nascimento) / 1000 / 60 / 60 / 24 / 365);
    return idade > parseInt(process.env.IDADE_MINIMA);
}

module.exports = idade_minima;