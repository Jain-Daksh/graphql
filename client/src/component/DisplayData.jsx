import { gql, useQuery } from '@apollo/client'
import React, { useState } from 'react'

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      age
      nationality
      username
      friends {
        name
      }
    }
  }
`
const QUERY_ALL_Movies = gql`
  query GetAllMovies {
    movies {
      name
      isInTheaters
    }
  }
`
const DisplayData = () => {

const [movieSearch, setMovieSearch] = useState('')


  const { data, loading, error } = useQuery(QUERY_ALL_USERS, QUERY_ALL_Movies)
  const { data: movieData } = useQuery(QUERY_ALL_Movies)

  if (loading) {
    return <h1>Data is Loading</h1>
  }
  if (data) {
    console.log(data)
  }

  if (error) {
    console.log(error)
  }
  return (
    <div>
      {data &&
        data.users.map(user => (
          <div>
            <h1>Name: {user.name}</h1>
            <h1>username: {user.username}</h1>
            <h1>age: {user.age}</h1>
            <h1>nationality: {user.nationality}</h1>
          </div>
        ))}

      <hr />
      <br />
      <br />
      <br />
      {movieData &&
        movieData.movies.map(movie => (
          <div>
            <h1>Movie Name: {movie.name}</h1>
          </div>
        ))}

      <hr />
      <br />
      <br />
      <br />

      <div>
        <input type='text' placeholder='' onChange={(e) => setMovieSearch(e.target.value)}/>
        <button>Fetch Data</button>
        <div>

        </div>
      </div>
    </div>
  )
}

export default DisplayData
