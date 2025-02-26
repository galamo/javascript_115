const company = {
    name: "IBM",
    location: "Givatayim",
    floor: 45,
    numberOfEmployees: 300,
    products: [{ name: "security", price: "2k" },
    { name: "AI application", price: "10k" }],
    revenue: function () { return 1; }
}
function increaseEmployees(c) {
    if (typeof c.numberOfEmployees === 'number') {
        c.numberOfEmployees = c?.numberOfEmployees + 1;
    }
}
function addProduct(c) {
    if (Array.isArray(c.products)) {
        c.products.push({ name: `CRM-${Math.ceil(Math.random() * 999)}`, price: `${Math.ceil(Math.random() * 999)}k` })
    }
}
const newCompany = company;


const copyOfCompany = { ...company } //shallow copy
const deepCopyCompany = JSON.parse(JSON.stringify(company)) // deep copy
const companyToClone = { ...company }
delete companyToClone.revenue
const copyWithSC = structuredClone(companyToClone)



increaseEmployees(newCompany)
increaseEmployees(company)
increaseEmployees(copyOfCompany)

addProduct(company)


console.log(copyWithSC)
console.log(company)
console.log(copyOfCompany)
console.log(deepCopyCompany)

