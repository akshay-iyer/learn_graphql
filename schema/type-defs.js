const {gql} = require("apollo-server");

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: String!
        friends: [User!]
        favoriteMovies: [Movie!]
    }

    type Movie{
        id: ID!
        name: String!
        year: Int!
        isBlockbuster: Boolean!
    }

    type Query {
        users: [User!]!
        user(name: String!): User!
        friends(name : String!): [User!]
        movies: [Movie!]!
        movie(name: String!) : Movie!
    }

    input CreateUserInput{
        name: String!
        username: String!
        age: Int!
        nationality: String = "India"
    }

    type Mutation { 
        createUser(input: CreateUserInput!): User!
    }
`;

module.exports = {typeDefs}