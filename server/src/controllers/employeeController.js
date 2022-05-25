const employeeCtrl = {};

employeeCtrl.getEmployees = (req, res) =>{
    res.send("Controller Works")
};

module.exports = employeeCtrl;