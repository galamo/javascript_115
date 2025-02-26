class Company {

    constructor(_name, _noe, _address) {
        this.name = _name
        this.employees = _noe
        this.address = _address
    }

    printCompany() {
        console.log(this.name + " " + this.address)
    }

    setNumberOfEmployees(newNum) {
        this.employees = newNum
    }

    getNumberOfEmployees() {
        return this.employees
    }


}

const c = new Company("Google", 300, "telAviv")
console.log(c)
c.printCompany()
console.log(c.setNumberOfEmployees(600))
console.log(c.getNumberOfEmployees())