const { UserList, MovieList } = require('../DummyData');
const lodash = require("lodash");

const resolvers = {
    Query: {
        users: () => { 
            return UserList;
        },
        
        user: (_, args) => {
            return lodash.find(UserList, {name: args.name})
        },

        friends: (_, args) => {
            const name = args.name;
            const user = lodash.find(UserList, {name:name})
            return user.friends
        },
        
        movies: () => {
            return MovieList
        },
        
        movie: (_, args) => {
            const name = args.name;
            const movie = lodash.find(MovieList, {name:name})
            return movie
        }
    },
    User: {
        favoriteMovies: () => {
            return lodash.filter(MovieList, (movie) => movie.isBlockbuster == true)
        }
    },
}

module.exports = {resolvers}