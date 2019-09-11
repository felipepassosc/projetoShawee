const mongoose = require('mongoose');

const help = mongoose.model('Help');

module.exports = {
    //Listar
    async index(req, res){
        const Help = await help.find();

        return res.json(Help);
    },
    //Criar
    async store(req, res){
        const Help = await help.create(req.body);

        return res.json(Help);
    },
    //Pegar dado especifico
    async show(req, res){
        let { id } = req.params;
        const Help = await help.findById(id);

        return res.json(Help);
    },
    //Atualizar
    async update(req, res){
        let { params: { id }, body } = req;
        const Help = await help.findByIdAndUpdate(id, body, { new: true });

        return res.json(Help);
    },
    //Deletar
    async destroy(req, res){
        await Help.findByIdAndDelete(req.params.id);

        return res.send();
    }
}