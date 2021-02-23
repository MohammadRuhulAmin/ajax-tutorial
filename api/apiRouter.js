const { request } = require('express');
const express = require('express');
const router = express.Router();
module.exports = router;
// employees data
let employees =[
    {
        id:"_xxdwwe",
        first_name:"john",
        last_name:"wilson",
        gender:"male",
        email:"john@gmail.com"
    },
    {
        id:"_xwwxr",
        first_name:"johnxx",
        last_name:"wixslson",
        gender:"female",
        email:"jfohxn@gmail.com"
    },


];

let getID = ()=>{
    return '_'+Math.random().toString(36).substr(2,9);
}

//Get -Employees
router.get('/employees',(request,response)=>{
    response.json(employees);
});

//Post Request

router.post('/employees',(request,response)=>{
    let employee = {
        id :getID(),
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.email,
        gender:request.body.gender

    }
    employees.push(employee);
    console.log('post request is saved!');
});

router.put('/employees/:id',()=>{
    let empId = request.params.id;
    let updateEmployee = {
        id:empId,
        first_name :request.body.first_name,
        last_name:request.body.last_name,
        email:request.body.email,
        gender :request.body.gender

    };
    let existingEmployee = employees.find((employee)=>{
        return employee.id ===empId;
    });
    employees.splice(employees.indexOf(existingEmployee),1,updateEmployee);
    console.log('employee updated!');
});

router.delete('/employees/:id',(request,response)=>{
    let empId = request.params.id;
    employees = employees.filter((employee)=>{
        return employee.id !==empId;
    });
    console.log('deleted');
});