class Authorization {
    authMiddleware = (req, res, next) => {
        const userType = req.headers['user-type'];
        const endpoint = req.path;

        if (!userType) {
            return res.status(403).json({
                message: 'User not authorized to access this resource!',
            });
        }

        try {
            if (endpoint.includes('admin/manager') && userType == 'admin') {
                return next();
            }

            if (
                endpoint.includes('manager/employee') &&
                ['manager', 'admin'].includes(userType)
            ) {
                return next();
            }

            if (
                endpoint.includes('employee') &&
                ['admin', 'manager', 'employee'].includes(userType)
            ) {
                return next();
            }

            if (endpoint.includes('healthcheck') && userType == 'admin') {
                return next();
            }

            throw new Error('User not authorized to access this resource!');
        } catch (error) {
            res.status(403).json({
                message: error.message,
            });
        }
    };
}

const authorization = new Authorization();

export default authorization;
