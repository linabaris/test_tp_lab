const getBodyPrice = (str) => {
    return str.replace(/,\d+$/,'')
}
const getRemainderPrice = (str) => {
    return str.replace(/^\d+,/,'')
}