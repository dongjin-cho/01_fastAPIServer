const db = require('../models');

function firstPage (req, res, next) {
    res.status(200).json(
        {'message': 'hello dongjin future connect!'}
    )
}

function post_customer (req, res, next) {
    db.customer.create({
        password: req.body.password,
        email: req.body.email,
        birthdate: req.body.birthdate,
        phone: req.body.phone,
        address: req.body.address,
        createdate: req.body.createdate
    }).then((res.status(200).json(
        {'message': 'insert success'})))
}

module.exports = {
    firstPage: firstPage,
    post_customer: post_customer,
}