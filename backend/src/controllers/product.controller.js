const productController = {}

const {config} = require('../config');

// para conexion a cloudinary
const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: config.cloudinary.cloud_name,
    api_key: config.cloudinary.api_key,
    api_secret: config.cloudinary.api_secret
})

const productModel = require('../models/product.model');

productController.getAll = async (req,res)=>{
    const products = await productModel.find();
    res.json({
        success:true,
        message: 'Los productos se han cargador correctamente',
        content:products
    })
}

productController.create = async (req,res) =>{
    try {
        const newProduct = new productModel(req.body)
        await newProduct.save();
        res.json({
            success: true,
            message: 'product added successfully',
            content: newProduct
        })               
    } catch (error) {
        res.status(502).json({
            success:true,
            message:'error al registrar un nuevo producto',
            content:error
        })
    }
}

productController.uploadImage = async (req,res)=>{

    productImage = req.files.productImage
    console.log(productImage.name);

    let uploadPath;
    uploadPath = '../backend/src/uploads/' + productImage.name;

    await productImage.mv(uploadPath,function (err) {
        if (err) {
            res.status(502).json({
                success:false,
                massage:"upload image error",
                content: err
            })
        } else {
            cloudinary.uploader.upload(uploadPath,(error,result)=>{
                console.log(result,error);
                res.json({
                    success:true,
                    message: "upload successfully",
                    content: result.url
                })
            })
            
        }
    })
}
module.exports = productController;