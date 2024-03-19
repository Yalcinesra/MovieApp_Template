"use strict"
/* -------------------------------------------------------
    EXPRESS - Movie API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const auth = require('../controllers/auth')

// URL: /auth

router.post('/login',auth.login)
router.all('/logout',auth.logout)

/* ------------------------------------------------------- */
module.exports = router