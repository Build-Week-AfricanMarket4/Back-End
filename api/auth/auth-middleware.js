function restrict(req, res, next) {
    console.log('restrict is wired!')
    next()
}


module.exports = {
    restrict
}