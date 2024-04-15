// import db from "../../infra/db/sequelize/models";
import dataMock from '../repositories/mocks.js';

const findUserById = async (req, res) => {
    const id = req.params.id;
  
    try {

        //? usar dados do banco - descomentar linha abaixo
        // const userData = await dataBase.User.findByPk(id);
//ou
        //usar dados mocados
        const userData = dataMock.find(user => user.id === id)

        if (userData) {
            res.send(userData);
          } else {
            res.status(404).send({
              message: `User not found with ${id}`,
            });
          }
        
         } catch(err) {
            res.status(500).send({
              message: err.message || "Erro ao tentar listar usuário",
            });
          };
      };

      export default  findUserById;