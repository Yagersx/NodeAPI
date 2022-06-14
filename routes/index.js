const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES= __dirname;


const removeExtension = (filename) => {
    return filename.split('.').shift();
}

//to do this, the routes file name and routes should be the same, example
//if route will be /users, the filename should be same users.js
//and after that, all routes will be added to router
fs.readdirSync(PATH_ROUTES).filter( (file)=> {
    const name= removeExtension(file);

    if(name!='index'){
        //this will use what is exported in required file
        router.use(`/${name}`, require(`./${name}`));
    }
});

module.exports = router;