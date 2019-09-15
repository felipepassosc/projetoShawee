const Tag = require('../models/Tags');

module.exports = {
    async store(req, res){
        const tag = await Tag.create(req.body);

        return res.json(tag);
    },
    async index(req, res){
        const tags = await Tag.find({name: 1});

        return res.json(tags);
    }
};