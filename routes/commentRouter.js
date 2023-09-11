const Router = require('express')
const router = new Router()
const commentController = require('../controllers/commentController')

router.post('/', commentController.create)
router.put('/:id', commentController.changeComment)
router.delete('/:id', commentController.delete)
router.get('/', commentController.getAll)

module.exports = router