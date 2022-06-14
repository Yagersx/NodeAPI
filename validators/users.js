const {check, validationResult} = require("express-validator");

const createUserValidator=[
    check("name").exists().notEmpty().isLength({min:5,max:50}).isString(),
    check("age").exists().notEmpty().isNumeric(),
    check("email").exists().notEmpty().isLength({min:5,max:50}).isEmail(),
    (req,res,next)=>{
        try {
            validationResult(req).throw();
            return next();

        } catch (err) {
            res.status(403);
            res.send({errors:err.array()});
        }
    }
];

module.exports= {createUserValidator }