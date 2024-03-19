"use strict";
/* -------------------------------------------------------
    EXPRESS - Movie API
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */
/* ------------------------------------------------------- *
{
  "name": "Ratatouille",
  "point": "8.1",
   "categoryId" :"65dc8a189a05213233b9b53a",
  "description": "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous Paris restaurant.",
 
  "image": "https://m.media-amazon.com/images/I/81n+81eQRuL._AC_UF894,1000_QL80_.jpg"
  
}
* ------------------------------------------------------- */


const MovieSchema = new mongoose.Schema(
  {
    
    createdId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      //required: true,
      
    }, 

    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
     // required: true,
     
    },
    commentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      
    },
    name: {
      type: String,
      trim: true,
      required: true,
      
    },

    point: {
      type: Number,
      trim: true,
      required: true,
      min: 0,
      max: 10,
     
    },

    image: {
      type: String,
      trim: true,
      
    },

    description: {
      type: String,
      trim: true,
      required: true,
      
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    countOfVisitors: {
      type: Number,
      default: 0,
    },

   
  },
  { collection: "movies", timestamps: true }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Movie", MovieSchema);
