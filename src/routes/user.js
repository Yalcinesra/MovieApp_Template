"use strict"
/* -------------------------------------------------------
    EXPRESS - Movie API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const user = require('../controllers/user')
const permission = require('../middlewares/permissions')


// URL: /personnels

// // Login/logout:
// router.post('/login', personnel.login)
// router.all('/logout', personnel.logout)

router.route('/')
    .get(permission.isLogin, user.list)
    .post(permission.isAdmin, user.create)

router.route('/:id')
    .get(permission.isLogin,user.read)
    .put(permission.isAdmin,user.update)
    .patch(permission.isAdmin,user.update)
    .delete(permission.isAdmin,user.delete)

/* ------------------------------------------------------- */
module.exports = router