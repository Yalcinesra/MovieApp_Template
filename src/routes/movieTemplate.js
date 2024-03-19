"use strict"
/* -------------------------------------------------------
    EXPRESS - Movie API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const movieTemplate = require('../controllers/movieTemplate')
const permission = require('../middlewares/permissions')

// URL: /movies

// router.route('/')
//     .get(movie.list)
//     .post(movie.create)

// router.route('/:id')
//     .get(movie.read)
//    // .put(permission.isAdmin,movie.update)
//     .put(movie.update)
//     .patch(permission.isAdmin,movie.update)
//     .delete(permission.isAdmin,movie.delete)
    

//     router.post('/:id/postLike', movie.postLike);

router.get('/',movieTemplate.list) // LIST

router.get('/create',movieTemplate.create) // CREATE
router.post('/create',movieTemplate.create) // CREATE

router.get('/:id', movieTemplate.read) // READ

router.get('/:id/delete', movieTemplate.delete) // DELETE

router.get('/:id/update', movieTemplate.update) // update
router.post('/:id/update', movieTemplate.update) // update
/* ------------------------------------------------------- */
module.exports = router