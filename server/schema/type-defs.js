// const { gql } = require('apollo-server')

// const typeDefs = gql`
// type User {
//   id: ID!
//   name: Stirng! // ! --> required
//   username: Stirng!
//   age: int!
//   nationality: Stirng!
// }

// type Query {
//   users: [User!]!
// }
// `

// module.exports = {
//   typeDefs
// }

const { gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality
    friends: [User]
    favoriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  enum Nationality {
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
    UKRAINE
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = BRAZIL
  }

  input CreateMovieInput {
    name: String!
    isInTheaters: Boolean = false
    yearOfPublication: Int!
  }

  input UpdateUsernameInput {
    id: ID!
    newUsername: String!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUsername(input: UpdateUsernameInput!): User
    deleteUser(id: ID!): User
    createMovie(input: CreateMovieInput!): Movie
  }
`

module.exports = { typeDefs }
