"use strict"
/* -------------------------------------------------------
    EXPRESS - Movie API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const comment= require('../controllers/comment')
const permission = require('../middlewares/permissions')



router.route('/')
    .get(comment.list)
    .post(permission.isAdmin, comment.create)

router.route('/:id')
    .get(comment.read)
    .put(permission.isAdmin,comment.update)
    .patch(permission.isAdmin,comment.update)
    .delete(permission.isAdmin,comment.delete)

// router.get('/:id/users', comment.users)

/* ------------------------------------------------------- */
module.exports = router