const help = require('../models/Help');

module.exports = {
    //Listar
    async index(req, res){
        const Help = await help.find().sort({createdAt: -1});

        return res.json(Help);
    },
    //Criar
    async store(req, res){
        const { title, description, tags } = req.body;
        const { iduser, nameuser } = req.headers;
        const Help = await help.create({
                title,
                description,
                iduser,
                nameuser,
                tags,
        });

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