// Object.create({}) // i dont use this, old



function Company(_name, _noe, _address) {
    this.name = _name
    this.employees = _noe
    this.address = _address
    this.details = function () {
        console.log("detailsss", this.address)
    }

}



const company1 = new Company("Google", 300, "telAviv")
const company2 = new Company("FB", 26000, "telAviv")
const company3 = new Company("IBM", 16000, "telAviv")
const company4 = new Company("Amazon", 6000, "telAviv")

company1.details()
Company.prototype.name = "IsraelCompanies";

console.log(company4)

company4.newProp
const tomer = {};
console.log(delete Object.prototype.isPrototypeOf)
const arr = [1, 2, 3];
console.log(arr.length)
const user = { a: 1 }

Object.prototype.length = function () {
    return Object.keys(this).length
}
console.log(company4.length())
console.log(user.length())


console.log(Object.keys(company4))

// implement the following functionality
// company4.length() => 4 
