// const { ApolloServer } = require('@apollo/server')

// const { typeDefs } = require('./schema/type-defs')
// const { resolvers } = require('./schema/resolvers')
// const server = new ApolloServer({ typeDefs, resolvers })

// // const url = 3000

// server.start().then(() => {
//   console.log(`server is running at}`)
// })

const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./schema/type-defs')
const { resolvers } = require('./schema/resolvers')

const server = new ApolloServer({ typeDefs, resolvers, context: (() => {
  return {
    name: 'test'
  }
}) })

server.listen().then(({ url }) => {
  console.log(`YOUR API IS RUNNING AT: ${url} :)`)
})
