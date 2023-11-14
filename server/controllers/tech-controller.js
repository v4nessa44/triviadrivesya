const { Tech } = require('../models');

module.exports = {
  async getAllTech(req, res) {
    try {
      const allTech = await Tech.find();

      if (!allTech || allTech.length === 0) {
        return res.status(404).json({ message: 'No technologies found' });
      }

      res.status(200).json(allTech);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  async getTechById({ params }, res) {
    try {
      const tech = await Tech.findOne({ _id: params.id });

      if (!tech) {
        return res.status(404).json({ message: 'Technology not found' });
      }

      res.status(200).json(tech);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  async createTech({ body }, res) {
    try {
      const tech = await Tech.create(body);
      res.status(201).json(tech);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'Unable to create technology' });
    }
  },

  async updateTech(req, res) {
    try {
      const tech = await Tech.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true }
      );

      if (!tech) {
        return res.status(404).json({ message: 'Technology not found' });
      }

      res.status(200).json(tech);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  async deleteTech(req, res) {
    try {
      const tech = await Tech.findOneAndDelete({ _id: req.params.id });

      if (!tech) {
        return res.status(404).json({ message: 'Technology not found' });
      }

      res.status(200).json({ message: 'Technology deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
};
