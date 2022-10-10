const { Pago } = require('../db.js');

const getPagos = async (req, res) => {
    const pagos = await Pago.findAll();
    res.json(pagos);
}
const getPagoById = async (req, res) => {
    const { id } = req.params;
    const pago = await Pago.findOne({
        where: {
            id
        }
    });
    res.json(pago);
}
const postPago = async (req, res) => {
    const{valor,userId}=req.body;
    const pago=await Pago.create({valor,userId});
    res.json(pago);
    }

module.exports={
    getPagos,
    getPagoById,
    postPago
}