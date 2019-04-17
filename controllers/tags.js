import { Tag, Item } from "../models";

export default {
  async getTagItems(req, res) {
    const id = Number(req.params.tag_id);
    try {
      const [{ items }] = await Tag.findAll({
        include: [
          {
            model: Item,
            as: "items"
          }
        ]
      });
      return res.status(200).send(items);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
};
