const categoryController = {}

const categoryModel = require('../models/category.model');

categoryController.getAll = async (req,res)=>{
    const categories = await categoryModel.find();
    res.json({
        success:true,
        message:'categories loaded',
        content:categories
    })
}

categoryController.create = async (req,res)=>{
    try{
        const newCategory = new categoryModel(req.body)
        await newCategory.save();
        res.status(201).json({
            success:true,
            message:'Category added successfully',
            content:newCategory
        })

    }catch(error){
        res.status(502).json({
            success:false,
            message:'Error by registering a new Category',
            content:error
        })
    }
}

categoryController.deleteOne = async (req,res) =>{
    try {
        const categories = await categoryModel.deleteOne({id: req.params.id});
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

module.exports = categoryController;