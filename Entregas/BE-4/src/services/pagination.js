async function getAllWithPagination(model, page = 1, pageSize = 10) {
    try {
        const offset = (page - 1) * pageSize;
        const results = await model.findAndCountAll({
            limit: pageSize,
            offset: offset
        });
        return {
            totalCount: results.count,
            totalPages: Math.ceil(results.count / pageSize),
            currentPage: page,
            pageSize: pageSize,
            data: results.rows
        };
    } catch (error) {
        if (error instanceof Sequelize.ValidationError) {
            return {
                status: 400,
                message: `Requisição inválida: ${error.message}`
            };
        } else if (error instanceof Sequelize.AuthorizationError) {
            return {
                status: 401,
                message: "Não autorizado - falha na autenticação"
            };
        } else if (error instanceof Sequelize.ForbiddenError) {
            return {
                status: 403,
                message: "Proibido - falta de permissão"
            };
        } else {
            return {
                status: 500,
                message: "Erro interno do servidor. Por favor, tente novamente mais tarde."
            };
        }
    }
}

module.exports = getAllWithPagination