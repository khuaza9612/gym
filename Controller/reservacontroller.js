const { Model } = require('sequelize');
const {User,Reserva,Clase}=require('../db');
const {bcrypt} = require("bcrypt");


const postreserva=async(req,res)=>{
    const {idclase,userId,clasesId,titleProduct,profesor,imagen}=req.body;
    let product=[]
    for(let i=0;i<clasesId.length;i++){
        product.push(
            await Clase.findOne({
                where:{
                    id:clasesId[i]
            }})
        )


    }
    const newreserva=await Reserva.create({
        fecha:product.map(p=>p.dataValues.date).join(","),
       idclase:product.map(p=>p.dataValues.id).join(","),
        titleProduct: product.map(p => p.dataValues.name).join(", "),
        image: product.map(p => p.dataValues.image).join(", "),
         profesor: product.map(p => p.dataValues.profesor).join(", "),
        userId,
    })
    res.status(200).send(newreserva)

}
const getreserva=async(req,res)=>{
const reserva=await Reserva.findAll();
res.status(200).send(reserva)

}
const getreservaById=async(req,res)=>{
    const {id}=req.params;
    const reserva=await Reserva.findAll({
        where:{userId:id}
    });
    if(!id||!reserva)return res.status(400).json({msg:"no tiene reservas"});
    res.status(200).send(reserva)
}
       
module.exports={
    postreserva
    ,getreserva
    ,getreservaById
}