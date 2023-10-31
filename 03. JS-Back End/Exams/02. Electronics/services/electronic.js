const Electronic = require("../models/Electronic");

exports.createElectronic = async (electronicData) =>
    await Electronic.create(electronicData);

exports.getAllElectronics = async () => await Electronic.find().lean();

exports.getSingleElectronic = async (id) =>
    await Electronic.findById(id).populate('owner').lean();

exports.updateElectronic = async (id, updateData) =>
    await Electronic.findByIdAndUpdate(id, updateData);

exports.deleteElectronic = async (id) =>
    await Electronic.findByIdAndDelete(id);
