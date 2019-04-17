import { User, Item } from '../models';

export default {
    async getAllUserItems(req, res) {
        const id = Number.parseInt(req.params.id, 10);
        
        try {
            const [user] = await User.findAll({
                include: [{
                    model: Item,
                    as: 'items'
                }]
            });
            return res.status(200).send(user.items);
        } catch (error) {
            console.log(error);
            return res.status(400).send(error);
        }
    },
}