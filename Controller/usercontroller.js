const { Model } = require('sequelize');
const {User}=require('../db');
const {bcrypt} = require("bcrypt");
const generarTokenID=require('../utils/generarTokenUser.js');
const {sendEmail,emailOlvidePassword}=require('../utils/email.js');
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
    const createdUser = user.dataValues;

    sendEmail({
       
        name: user.nombre,
        email: user.email,
       
      });
    
    return createSendToken(user, 201, res);
  
  };

    const updateUser=async(req,res)=>{
        const {id}=req.params;
        const {name,lastName,email,image,password,passConfirmation,rol,isBlocked,clave}=req.body;
        const user=await User.findOne({where:{id}});
        if(!user){
            return res.status(404).json({msg:'User not found'});
        }
        const comprePass=(a,b)=>{
            if(a===b){
                return true;
            }
            return false;
        };
        if(!comprePass(password,passConfirmation)){
            return res.status(400).json({msg:'Password does not match'});
        }
        const beforeUpdate=async(user)=>{
            const salt=await bcrypt.genSalt(10);
            user.password=await bcrypt.hash(user.password,salt);
            user.passConfirmation=user.password;}
        await User.update({name,lastName,email,image,password,passConfirmation,rol,isBlocked,clave},{where:{id}});
        res.status(200).json({msg:'User updated'});
        
    }



module.exports={
    getAllUsers,
    getUserById,
    createUser

}