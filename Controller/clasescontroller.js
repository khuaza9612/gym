const { Clase } = require('../db.js');


const getClases = async (req, res) => {
    const clases = await Clase.findAll();
    res.json(clases);
}

module.exports={
    getClases

}