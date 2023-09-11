const {WatchedMovies} = require('../models/models')
const ApiError = require('../error/ApiError')
class WatchedMoviesController {
    async create (req, res) {
        const {name, postersrc, imdbId, userId, type} = req.body
        const watchedMovie = await WatchedMovies.create({name, postersrc, imdbId, userId, type})
        return res.json(watchedMovie)
    }
    async delete (req, res, next) {
        const {id} = req.params;

        const deletedMovie = await WatchedMovies.destroy({
                where: {id}, 
            });
        return res.json(deletedMovie)
    }
    async changeRating(req, res, next) {
        try {
            let {id, rating} = req.body;
            
            const updatedRating = await WatchedMovies.update(
                {
                    rating,
                },
                {
                    where: {id},
                    returning: true,
                }
            );
            return res.json(updatedRating)
        }
        catch (e) {
          next(ApiError.badRequest(e.message))
        }
    }

    async getAll (req, res) {
        const {userId} = req.query
        const watchedMovies = await WatchedMovies.findAll({where: {userId}})
        return res.json(watchedMovies)
    }

}

module.exports = new WatchedMoviesController()