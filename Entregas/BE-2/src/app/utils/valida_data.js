function valida_data(data){
    let data_valida = new Date(data);
    if(data_valida.toString() === "Invalid Date"){
        return false;
    } else {
        return true;
    }
}

module.exports = valida_data;