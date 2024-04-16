import UserModel from"../models/user.model.js";

class EmployeeRepository {
    async registrationUpdate(data) {
        await UserModel.update(
            {
                education_level: data.education_level,
                gender: data.gender,
                nationality: data.nationality,
                color: data.color,
                sexual_orientation: data.sexual_orientation,
                pcd: data.pcd,
                over_60: data.over_60,
            },
            {
                where: {
                    email: data.email
                }
            }
        )
    }
}

export const employeeRepository = new EmployeeRepository()