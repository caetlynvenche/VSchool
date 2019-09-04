const employees = []

function Employee(name, jobTitle, salary) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full Time"
}

Employee.prototype.printEmployeeForm = function() {
    console.log(this)
}

const tony = new Employee("Tony", "Accountant", "70,000")
const amy = new Employee("Amy", "Receptionist", "35,000")
const barbara = new Employee("Barbara", "Analyst", "43,000")

tony.status = "Contract"
amy.status = "Part Time"

tony.printEmployeeForm()
amy.printEmployeeForm()
barbara.printEmployeeForm()

employees.push(tony)
employees.push(amy)
employees.push(barbara)

console.log(employees)