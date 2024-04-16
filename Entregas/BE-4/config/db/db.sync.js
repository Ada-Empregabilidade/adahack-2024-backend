const UserModel = require("../../src/models/user");
const CandidateModel = require("../../src/models/candidate");
const EmployeeModel = require('../../src/models/employee');
const HumanResourceModel = require("../../src/models/human_resource");
const JobModel = require("../../src/models/job");
const ApplicationModel = require("../../src/models/application");
const AddressModel = require("../../src/models/address");

(async () => {
    await UserModel.sync();
    await CandidateModel.sync();
    await EmployeeModel.sync();
    await HumanResourceModel.sync();
    await JobModel.sync();
    await ApplicationModel.sync();
    await AddressModel.sync();
})();
