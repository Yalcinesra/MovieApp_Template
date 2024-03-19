"use strict"
/* -------------------------------------------------------
    EXPRESS - PMovie API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const category = require('../controllers/category')
const permission = require('../middlewares/permissions')

// URL: /categories

router.route('/')
    .get(category.list)
    //.post(permission.isAdmin, category.create)
    .post( category.create)

router.route('/:id')
    .get(category.read)
    //.put(permission.isAdmin,category.update)
    .put(category.update)
    //.patch(permission.isAdmin,category.update)
    .patch(category.update)
    //.delete(permission.isAdmin,category.delete)
    .delete(category.delete)

// router.get('/:id/users', category.users)

/* ------------------------------------------------------- */
module.exports = router