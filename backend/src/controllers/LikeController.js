module.exports = {

    async store(req, res) {

        const { model, id } = req.params;
        const Model = require(`../models/${model}`);

        const { iduser } = req.headers;
    
        const loggedUser = await Model.findById(iduser);

        console.log(loggedUser);
    
        loggedUser.likes.push(id);
    
        loggedUser.save();
    
        return res.json(loggedDev);     

    }
}