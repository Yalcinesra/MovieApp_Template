"use strict";
/* -------------------------------------------------------
    EXPRESS - Movie API
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
// {
//   "blogId": "65343222b67e9681f937f201",
//   "userId": "65343222b67e9681f937f201",
//   "comment": "Comment 1"
// }
/* -------------------------------------------------------------------------- */

const CommentSchema = new mongoose.Schema(
  {
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
   
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comment: {
      type: String,
      trim: true,
      required: true,
      
    }, 
    
  },
  { collection: "comments", timestamps: true }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Comment", CommentSchema);
