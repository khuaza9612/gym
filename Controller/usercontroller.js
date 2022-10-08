const { Model } = require('sequelize');
const {User}=require('../db');
const {bcrypt} = require("bcrypt");
const generarTokenID=require('../utils/generarTokenUser.js');
const {createSendToken}=require('./authcontroller')

const getAllUsers=async(req,res)=>{
    const users=await User.findAll();
    res.json(users);
}

const getUserById=async(req,res)=>{
    const {id}=req.params;
    const user=await User.findOne({where:{id}});
    if(!user||!id){
    return res.status(404).json({msg:'User not found'});
}
res.status(200).json(user);
}
const createUser=async(req,res)=>{
    const {name,lastName,email,image,password,passConfirmation,rol,isBlocked,clave}=req.body;
    const use=await User.findOne({where:{email}});
    const comprePass=(a,b)=>{
        if(a===b){
            return true;
        }
        return false;
    };
    if(use){
        return res.status(400).json({msg:'User already exists'});
    }else if(!comprePass(password,passConfirmation)){
        return res.status(400).json({msg:'Password does not match'});
    }

    const beforeCreate=async(user)=>{
        const salt=await bcrypt.genSalt(10);
        user.password=await bcrypt.hash(user.password,salt);
        user.passConfirmation=user.password;}
    const user=await User.create({name,lastName,email,image,password,passConfirmation,rol,isBlocked:"false",clave:generarTokenID()});
    return createSendToken(user, 201, res);
    };



module.exports={
    getAllUsers,
    getUserById,
    createUser

}