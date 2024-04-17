
// const UserModel = require("./models/user");
const CandidateModel = require("./models/candidate");
const EmployeeModel = require('./models/employee');
const HumanResourceModel = require("./models/human_resource");
const JobModel = require("./models/job");
const ApplicationModel = require("./models/application");
const AddressModel = require("./models/address");

const dbSync = async () => {
    // await UserModel.sync();

    await CandidateModel.sync();
    await EmployeeModel.sync();
    await HumanResourceModel.sync();
    await JobModel.sync();
    await ApplicationModel.sync();
    await AddressModel.sync();

};

module.exports = dbSync;

