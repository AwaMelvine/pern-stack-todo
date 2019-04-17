import { Item } from "../models";

export default {
  async getAllItems(req, res) {
    try {
      const items = await Item.findAll();
      return res.status(200).send({ items });
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  async getById(req, res) {
    const id = Number.parseInt(req.params.id, 10);
    try {
      const item = await Item.findByPk(id);
      return res.status(200).send({ item });
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  async createItem(req, res) {
    try {
      console.log(req.body);

      const item = await Item.create(req.body);
      return res.status(201).json({ item });
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  async updateItem(req, res) {
    const id = Number(req.params.id);

    try {
      const [numberOfAffectedRows, affectedRows] = await Item.update(
        {
          title: req.body.title
        },
        {
          where: { id },
          returning: true, // needed for affectedRows to be populated
          plain: true // makes sure that the returned instances are just plain objects
        }
      );
      return res.status(200).send({ item: affectedRows });
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  async toggleCompleted(req, res) {
    const id = Number(req.params.id);
    try {
      const item = await Item.findByPk(id);
      const updated = await item.update({
        completed: !item.completed
      });

      return res.status(201).send(updated);
    } catch (error) {}
  },

  async deleteItem(req, res) {
    const id = Number.parseInt(req.params.id, 10);

    try {
      await Item.destroy({
        where: { id }
      });
      return res.status(204).send({ message: "Item deleted" });
    } catch (error) {
      return res.status(400).send(error);
    }
  }
};
