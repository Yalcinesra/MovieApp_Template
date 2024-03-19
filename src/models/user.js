"use strict"
/* -------------------------------------------------------
    EXPRESS - Movie API
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
const passwordEncrypt = require('../helpers/passwordEncrypt')

const UserSchema = new mongoose.Schema({

  
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        trim: true,
        required: true,
        set: (password) => passwordEncrypt(password),
    },

    firstName: {
        type: String,
        trim: true,
       
    },

    lastName: {
        type: String,
        trim: true,
       
    },


    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        validate: (email) => (email.includes('@') && email.includes('.'))
    },


    isAdmin: {
        type: Boolean,
        default: false,
    },

    isActive: {
        type: Boolean,
        default: true,
      }

   
    
}, { collection: 'users', timestamps: true })

/* ------------------------------------------------------- */
module.exports = mongoose.model('User', UserSchema)