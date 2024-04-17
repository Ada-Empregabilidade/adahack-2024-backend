function isAStringType(string) {
    return typeof string === 'string'
}

function isAEmptyString(string) {
    return string.length === 0
}

function isAFullSpaceString(string) {
    return string.trim() === '';
}

function isAStringGreaterThenTwoCharacters(string) {
    return string.length >= 2
}

module.exports = {
    isAStringType,
    isAEmptyString,
    isAFullSpaceString,
    isAStringGreaterThenTwoCharacters};