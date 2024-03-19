"use strict"
/* -------------------------------------------------------
    EXPRESS - Movie API
------------------------------------------------------- */
// SYCHRONIZATION:

module.exports = async function() {

    //return null;

    /* REMOVE DATABASE */
    //const { mongoose } = require('../configs/dbConnection')
   // await mongoose.connection.dropDatabase()
    //console.log('- Database and all data DELETED!')
    /* REMOVE DATABASE */
    
    /* Department & Personnel */
    const Category = require('../models/category.model')
    await Category.deleteMany();
    await Category.create({
        name:"aile"
    })
    await Category.create({
        name:"cocuk"
    })
    await Category.create({
        name:"yetiskin"
    })
    const movie = require('../models/movie.model')
    const User = require('../models/user.model')
    await User.deleteMany();
    await User.create({
      _id: "65343222b67e9681f937f001",
      username: "admin",
      password: "aA*123456",
      email: "admin@site.com",
      firstName: "admin",
      lastName: "admin",
      isActive: true,
      isAdmin: true,
    });
    await User.create({
      _id: "65343222b67e9681f937f002",
      username: "test",
      password: "aA*123456",
      email: "test@site.com",
      firstName: "test",
      lastName: "test",
      isActive: true,
      isAdmin: false,
    });
    const comment = require('../models/comment.model')
}