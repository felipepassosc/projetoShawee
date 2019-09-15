const answer = require('../models/Answer');

module.exports = {
    //Listar
    async index(req, res){
        const { idhelp } = req.params;
        const Answer = await answer.find().sort({createdAt: -1});

        return res.json(Answer.filter(ans => ans.idHelp == idhelp));
    },
    //Criar
    async store(req, res){
        const { idHelp } = req.params;
        const { description } = req.body;
        const Answer = await answer.create({
            description,
            idHelp,
        });

        return res.json(Answer);
    },
    //Pegar dado especifico
    async show(req, res){
        let { id } = req.params;
        const Answer = await answer.find(id);

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