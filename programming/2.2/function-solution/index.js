function validateString(str) {
    if (typeof str !== 'string') return;
    if (str.length > 10) return "Too long"
    else return `Valid String ${str.length}`
}