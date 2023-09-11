const {Comment} = require('../models/models')
const ApiError = require('../error/ApiError')
class CommentController {
    async create (req, res) {
        const {text, author, imdbId, userId} = req.body
        const comment = await Comment.create({text, author, imdbId, userId})
        return res.json(comment)
    }
    async delete (req, res, next) {
        const {id} = req.params;

        const deletedComment = await Comment.destroy({
                where: {id}, 
            });
        return res.json(deletedComment)
    }
    async changeComment(req, res, next) {
        try {
            let {id, text} = req.body;
            
            const updatedComment = await Comment.update(
                {
                    text,
                },
                {
                    where: {id},
                    returning: true,
                }
            );
            return res.json(updatedComment)
        }
        catch (e) {
          next(ApiError.badRequest(e.message))
        }
    }

    async getAll (req, res) {
        const {imdbId} = req.query
        const comments = await Comment.findAll({where: {imdbId}})
        return res.json(comments)
    }

}

module.exports = new CommentController()