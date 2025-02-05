function validateString(str) {
    if (typeof str !== 'string') return; //input validation
    if (str.length > 10) return "Too long" // req - 1
    else return `Valid String ${str.length}` // req - 2 
}


