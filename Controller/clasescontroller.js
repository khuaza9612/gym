const { Clase } = require('../db.js');


const getClases = async (req, res) => {
    const clases = await Clase.findAll();
    res.json(clases);
}
const getClaseById = async (req, res) => {
    const { id } = req.params;
    const clase = await Clase.findOne({
        where: {
            id
        }
    });
    res.json(clase);
}

const getClaseByname = async (req, res) => {
    const name = req.query.name;
    const totalProducts = await Clase.findAll();

    if (name) {
      const productTiitle = await totalProducts.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
      productTiitle.length ?
        res.status(200).send(productTiitle) :
        res.status(404).send('No encontramos tu clase.');
    } else {
      res.status(200).send(totalProducts);
    };
  };

  const postClase = async (req, res) => {
    const{date,profesor,name,image}=req.body;
    const clase=await Clase.create({date,profesor,name,image});
    res.json(clase);
    }
 const deletaClase = async (req, res) => {
    const { id } = req.params;
    const clase = await Clase.findOne({
        where: {
            id
        }
    });
    await clase.destroy();
    return res.status(400).json({msg:'eliminado satisfactoriamente'});
}


module.exports={
    getClases,
    getClaseById,
    getClaseByname,
    postClase,
    deletaClase

}