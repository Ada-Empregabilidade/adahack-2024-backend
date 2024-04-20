const crypto = require("node:crypto");


function criptografar(senha){
    const salt = process.env.PASSWORD_SALT;
    return crypto.pbkdf2Sync(senha, salt, 100000, 64, "sha512").toString("hex");
}

module.exports = criptografar;