"use strict"
/* -------------------------------------------------------
    EXPRESS - Movie API
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
// {
//   "userId": "65343222b67e9681f937f001",
//   "token": "...tokenKey..."
// }

/* -------------------------------------------------------------------------- */

const TokenSchema = new mongoose.Schema({
   
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },

    token: {
        type: String,
        trim: true,
        required: true,
    },

}, { collection: 'tokens', timestamps: true })

/* ------------------------------------------------------- */
module.exports = mongoose.model('Token', TokenSchema)