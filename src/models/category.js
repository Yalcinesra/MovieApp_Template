"use strict"
/* -------------------------------------------------------
    EXPRESS - Movie API
------------------------------------------------------- */
/* -------------------------------------------------------
     {
            
            "name": "aile",
           
        },
        {
            
            "name": "cocuk",
            
        },
        {
           
            "name": "yetiskin",
            
        }
    ]
------------------------------------------------------- */

const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
// MODELS
const CategorySchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    }

}, { collection: "categories", timestamps: true })

/* ------------------------------------------------------- */
module.exports = mongoose.model('Category', CategorySchema)