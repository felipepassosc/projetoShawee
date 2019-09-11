const mongoose = require('mongoose');

const answer = mongoose.model('Answer');

module.exports = {
    //Listar
    async index(req, res){
        const Answer = await answer.find();

        return res.json(Answer);
    },
    //Criar
    async store(req, res){
        const Answer = await answer.create(req.body);

        return res.json(Answer);
    },
    //Pegar dado especifico
    async show(req, res){
        let { id } = req.params;
        const Answer = await answer.findById(id);

        return res.json(Answer);
    },
    //Atualizar
    async update(req, res){
        let { params: { id }, body } = req;
        const Answer = await answer.findByIdAndUpdate(id, body, { new: true });

        return res.json(Answer);
    },
    //Deletar
    async destroy(req, res){
        await Answer.findByIdAndDelete(req.params.id);

        return res.send();
    }
}