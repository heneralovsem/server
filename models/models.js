const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},

})

const WatchLaterMovies = sequelize.define('watch_later_movies', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    imdbId: {type: DataTypes.STRING, allowNull: false},
    postersrc: {type: DataTypes.STRING, allowNull: false},
    type: {type: DataTypes.STRING, defaultValue: 'N/A'},
})
const WatchedMovies = sequelize.define('watched_movies', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0}, 
    imdbId: {type: DataTypes.STRING, allowNull: false},
    postersrc: {type: DataTypes.STRING, allowNull: false},
    type: {type: DataTypes.STRING, defaultValue:'N/A'},
})

const Comment = sequelize.define('comment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    imdbId: {type: DataTypes.STRING, allowNull: false},
    author: {type: DataTypes.STRING, allowNull: false},
    text: {type: DataTypes.STRING, allowNull: false},
})



User.hasMany(WatchLaterMovies)
WatchLaterMovies.belongsTo(User)

User.hasMany(WatchedMovies)
WatchedMovies.belongsTo(User)

User.hasMany(Comment)
Comment.belongsTo(User)



module.exports = {
    User,
    WatchLaterMovies,
    WatchedMovies,
    Comment,
    
}


