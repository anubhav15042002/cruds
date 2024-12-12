const Item = require('../models/item');

// Create Item
const createItem = async (req,res)=>{
    try{
        const { name,price } = req.body;
        const newItem = new Item({name,price});
        await newItem.save();
        res.send(newItem);
    } catch {
        res.send({error:'error.message'});
    }
};

// Get All Items

const getItems = async(req,res)=>{
    try{
        const items = await Item.find();
        res.send(items);
    } catch {
        res.send({error:'error.message'});
    }
};

// Update Item 

const updateItem = async(req,res)=>{
    try{
        const updatedItems = await Item.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.send(updatedItems);
    }
    catch{
        res.send({error:'error.message'});
    }
}

// Delete Item

const deleteItem = async(req,res)=>{
    try{
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        res.send(deletedItem);
    }
    catch{
        res.send({error:'error.message'});
    }
}

module.exports = {
    createItem,
    getItems,
    updateItem,
    deleteItem,
 };





