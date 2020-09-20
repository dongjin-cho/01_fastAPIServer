function firstPage (req, res, next) {
    res.status(200).json(
        {'message': 'hello dongjin future connect!'}
    )
}

module.exports = {
    firstPage: firstPage,
}