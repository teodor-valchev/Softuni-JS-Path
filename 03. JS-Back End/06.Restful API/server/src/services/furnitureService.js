const Furniture = require('../models/Furniture')

exports.create = (furnitureData) => Furniture.create(furnitureData)

exports.getAll = async (qs) => {
    let query = Furniture.find({});

    if (qs.where) {
        const { where } = qs
        let splittedString = where.split('=')
        const ownerId = splittedString[1].replaceAll('"', '');
        query = Furniture.find({ _ownerId: ownerId });
    }
    const result = await query
    return result
};

exports.getSingleFurniture = (id) => Furniture.findById(id);

exports.edit = (id, furnitureData) => Furniture.findByIdAndUpdate(id, furnitureData);

exports.deleteFurniture = (id) => Furniture.findByIdAndDelete(id);

