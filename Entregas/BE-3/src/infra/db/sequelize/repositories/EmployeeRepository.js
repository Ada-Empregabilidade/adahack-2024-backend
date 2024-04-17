// import UserModel from '../models/user.model.js';
import { User } from '../models/index.js';

class EmployeeRepository {
    async registrationUpdate(data) {
        const newData = {
            first_name: data.first_name,
            surname: data.surname,
            position: data.position,
            email: data.email,
            education_level: data.education_level,
            gender: data.gender,
            ethnicity: data.ethnicity,
            nationality: data.nationality,
            sexual_orientation: data.sexual_orientation,
            pcd: data.pcd,
            over_60: data.over_60,
        };
        const dbResponse = await User.update(newData, {
            where: {
                email: data.email,
            },
        });

        return dbResponse;
    }
}

export const employeeRepository = new EmployeeRepository();