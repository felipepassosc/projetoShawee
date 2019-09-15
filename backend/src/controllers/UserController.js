const user = require('../models/User');

module.exports = {
    //Listar
    async index(req, res){
        const User = await user.find();

        return res.json(User);
    },
    //Criar
    async store(req, res){
        const User = await user.create(req.body);
        return res.json(User);
    },
    //Pegar dado especifico
    async show(req, res){
        let { id } = req.params;
        const User = await user.findById(id);

        return res.json(User);
    },
    //Atualizar
    async update(req, res){
        let { params: { id }, body } = req;
        const User = await user.findByIdAndUpdate(id, body, { new: true });

        return res.json(User);
    },
    //Deletar
    async destroy(req, res){
        await User.findByIdAndDelete(req.params.id);

        return res.send();
    }
}