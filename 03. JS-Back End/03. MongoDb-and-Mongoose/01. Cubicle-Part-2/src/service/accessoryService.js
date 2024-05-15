const Accessory = require('../models/Accessory')

exports.createAccessory = (accessoryData) => {
    const accessory = new Accessory(accessoryData)
    return accessory.save()
} 

exports.getAllAccessories = () => {
    return Accessory.find();
}; 

exports.getOthers = (accessoryIds) => {
    return Accessory.find({_id: {$nin:accessoryIds}});
}; 