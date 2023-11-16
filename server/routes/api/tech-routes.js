const router = require('express').Router();
const {
  getAllTech,
  getTechById,
  createTech,
  updateTech,
  deleteTech,
} = require('../../controllers/tech-controller');

router.route('/').get(getAllTech);
router.route('/:id').get(getTechById);
router.route('/').post(createTech);
router.route('/:id').put(updateTech);
router.route('/:id').delete(deleteTech);

module.exports = router;
