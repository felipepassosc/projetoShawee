module.exports = {

    async store(req, res) {

        const { model, id } = req.params;
        const { iduser } = req.headers;

        const Model = require(`../models/${model}`);


        if(model == 'User')
        {
            const loggedUser = await Model.findById(iduser);
    
            if (loggedUser.likes.find( like => like == id)){
                return res.json('já deu like');
            }

            loggedUser.likes.push(id);
    
            loggedUser.save();
    
            return res.json(await Model.findById(id));     
        }
        else{
            const Answer = await Model.findById(id);

            if (Answer.likes.find( like => like == iduser)){
                return res.json('já deu like nessa resposta');
            }

            Answer.likes.push(iduser);
    
            Answer.save();
    
            return res.json(await Model.findById(id));    
        }
    }
}