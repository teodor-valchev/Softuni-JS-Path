const Creature = require("../models/Creature");

exports.createNewPost = async (creatureData) =>
    await Creature.create(creatureData);

exports.getAllPosts = async () => await Creature.find().lean();

exports.getSinglePost = async (creatureId) =>
    await Creature.findById(creatureId).lean();

exports.getSinglePostAndUpdate = async (creatureId, creatureData) =>
    await Creature.findByIdAndUpdate(creatureId, creatureData);

exports.deleteCreature = async (creatureId) =>
    await Creature.findByIdAndDelete(creatureId);

    exports.getMyPosts = async (id) =>
        await Creature.find({owner: id}).populate('owner').lean();
