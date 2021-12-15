import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService{
    constructor(loggerService){
        this.employee = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }

    load(){
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if(!this.checkCustomerValidityForErrors(user)){
                        this.customers.push(user)
                    }
                    break;
                case "employee":          
                    if(!this.checkEmployeeValidityForErrors(user)){
                        this.employee.push(user)
                    }
                    break;
                default:
                    this.errors.push(new DataError("Wrong user type",user))
                    break;
            }
            console.log(user)
        }
    }

    add(user){
        switch (user.type) {
            case "customer":
                if(!this.checkCustomerValidityForErrors(user)){
                    this.customers.push(user)
                }
                break;
            case "employee":
                if(!this.checkEmployeeValidityForErrors(user)){
                    this.employee.push(user)
                }
                break;
            default:
                this.errors.push(new DataError("This user can not be added. Wrong user type",user))
                break;
        }
        this.loggerService.log(user +" eklendi")
    }

    //react formik-yup
    checkCustomerValidityForErrors(user){
        let requiredField = "id firstName lastName age city".split(" ")
        let hasErrors = false
        for (const field of requiredField) {
            if(!user[field]){
                hasErrors = true
                this.errors.push(new DataError(`Validation problem. ${field} is required`,user))
            }
        }
        return hasErrors
    }

    checkEmployeeValidityForErrors(user){
        let requiredField = "id firstName lastName age city salary".split(" ")
        let hasErrors = false
        for (const field of requiredField) {
            if(!user[field]){
                hasErrors = true
                this.errors.push(new DataError(`Validation problem. ${field} is required`,user))
            }
        }
        if(Number.isNaN(Number.parseInt(+user.age))){
            hasErrors = true
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number`,user))
        }
        return hasErrors
    }

    listCustomers(){
        return this.customers
    }

    getCustomerById(id){
        return this.customers.find(u=> u.id === id)
    }
    
    getCustomersSorted(){
        this.customers.sort((customer1,customer2) => {
            if(customer1.firstName < customer2.firstName){
                return 1
            }
            else if(customer1.firstName === customer2.firstName){
                return 0
            }
            else{
            return -1
            }
        })
    }

    listEmployee(){
        return this.employee
    }

    getEmployeeById(id){
        return this.employee.find(u=> u.id === id)
    }
    
    getEmployeeSorted(){
        return this.employee.sort((employee1,employee2) => {
            if(employee1.firstName < employee2.firstName){
                return -1
            }
            else if(employee1.firstName === employee2.firstName){
                return 0
            }
            else{
                return 1
            }
        })
    }
}