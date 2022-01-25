export function convertToFloat(val, defaultValIfError) {
    return isNaN(val) ? defaultValIfError : Number.parseFloat(val);
}
