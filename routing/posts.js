const express = require('express');
const router = express.Router();
const postControllers = require('../controllers/postsController');

router.get('/', postControllers.indexPost);
router.get('/:id', postControllers.showPost);
router.post('/', postControllers.storePost);
router.put('/:id', postControllers.updatePost);
router.patch('/:id', postControllers.modifyPost);
router.delete('/:id', postControllers.deletePost);

module.exports = router;
