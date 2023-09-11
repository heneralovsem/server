const {WatchLaterMovies} = require('../models/models')
const ApiError = require('../error/ApiError')
class WatchLaterMoviesController {
    async create (req, res) {
        const {name, postersrc, imdbId, userId, type} = req.body
        const watchLaterMovie = await WatchLaterMovies.create({name, postersrc, imdbId, userId, type})
        return res.json(watchLaterMovie)
    }
    async delete (req, res, next) {
        const {id} = req.params;

        const deletedMovie = await WatchLaterMovies.destroy({
                where: {id}, 
            });
        return res.json(deletedMovie)
    }

    async getAll (req, res) {
        const {userId} = req.query
        const watchLaterMovies = await WatchLaterMovies.findAll({where: {userId}})
        return res.json(watchLaterMovies)
    }

}

module.exports = new WatchLaterMoviesController()