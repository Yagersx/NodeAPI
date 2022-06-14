const  {usersModel} = require('../models');

const getUsers= async (req,res)=> { 
    const data = await usersModel.find({});
    res.send({data});
};

const getUserById = (req,res)=> { 
    const data = ["Usuario especifico"];
    res.send({data});
};

const createUser = async(req,res)=> { 
    const { body }= req;

    usersModel.create(body).then((response)=>{
        res.send({wasSuccess:true, data: response});

    }).catch((err)=>{
        res.send({wasSuccess:false, data:err});

    });


};
const updateUser = (req,res)=> { };
const deleteUser = (req,res)=> { };



module.exports = {getUsers, getUserById, createUser,updateUser,deleteUser
}