const { UserList, MovieList } = require('../FakeData')
const _ = require('lodash')

const resolvers = {
  Query: {
    users(parent, args, context, info) {
      console.log('context', context)
      console.log('info', info)
      return UserList
    },
    user: (parent, args) => {
      const id = args.id
      const user = _.find(UserList, { id: Number(id) })
      return user
    },
    movies() {
      return MovieList
    },
    movie: (parent, args) => {
      const name = args.name
      const movie = _.find(MovieList, { name })
      return movie
    }
  },
  User: {
    favoriteMovies: () => {
      return _.filter(
        MovieList,
        movie =>
          movie.yearOfPublication >= 2000 && movie.yearOfPublication < 2010
      )
    }
  },

  /// mutattion ex
  Mutation: {
    createUser: (parent, args) => {
      const user = args.input
      const lastId = UserList[UserList.length - 1].id
      user.id = lastId + 1
      UserList.push(user)
      console.log(user)
      return user
    },

    createMovie: (parent, args) => {
      const movie = args.input
      const lastId = MovieList[MovieList.length - 1].id
      movie.id = lastId + 1
      MovieList.push(movie)
      console.log(movie)
      return movie
    },

    updateUsername: (parent, args) => {
      const { id, newUsername } = args.input
      let userUpdate
      UserList.forEach(user => {
        if (user.id === id) {
          user.username = newUsername
          userUpdate = user
        }
      })
      return userUpdate
    },

    deleteUser: (parent, args) => {
      const id = args.id
      _.remove(UserList, user => user.id === Number(id))
      console.log(UserList)
      return UserList
    }
  }

  // Mutation: {
  //   createUser: (parent, args) => {
  //     const user = args.input
  //     console.log(user)
  //   }
  // }

  /// context,fragments,unions

  /*
  {

  }
  */
}
module.exports = {
  resolvers
}
