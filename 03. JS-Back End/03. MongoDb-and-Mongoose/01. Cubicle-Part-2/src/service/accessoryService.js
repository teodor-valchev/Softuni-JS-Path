const Accessory = require('../models/Accessory')

exports.createAccessory = (accessoryData) => {
    const accessory = new Accessory(accessoryData)
    return accessory.save()
} 

exports.getAllAccessories = () => {
    return Accessory.find();
}; 