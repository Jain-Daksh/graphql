import { gql, useLazyQuery, useQuery } from '@apollo/client'
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

const Get_A_Movie_BY_NAME = gql`
  query Movie($name: String!) {
    movie(name: $name) {
      id
      name
      yearOfPublication
    }
  }
`

const DisplayData = () => {
  const [movieSearch, setMovieSearch] = useState('')

  const [fetchMovie, { data: movieSearchData, error: movieError }] =
    useLazyQuery(Get_A_Movie_BY_NAME)
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
  if (movieError) {
    console.log(movieError)
  }
  return (
    <>
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

      {/* <div>
        <input
          type="text"
          placeholder=""
          onChange={e => setMovieSearch(e.target.value)}
        />
        <button
          onClick={() => {
            fetchMovie({
              variables: {
                name: movieSearch
              }
            })
          }}
        >
          Fetch Data
        </button>
        <div>
          {movieSearchData && (
            <div>
              <h1>{movieSearchData.movie.name}</h1>
              <h1>{movieSearchData.movie.yearOfPublication}</h1>
            </div>
          )}
        </div>
      </div> */}

      <div>
        <input
          type="text"
          placeholder="Interstellar..."
          onChange={event => {
            setMovieSearch(event.target.value)
          }}
        />
        <button
          onClick={() => {
            fetchMovie({
              variables: {
                name: movieSearch
              }
            })
          }}
        >
          Fetch Data
        </button>
        <div>
          {movieSearchData && (
            <div>
              <h1>MovieName: {movieSearchData.movie.name}</h1>
              <h1>
                Year Of Publication: {movieSearchData.movie.yearOfPublication}
              </h1>{' '}
            </div>
          )}
          {movieError && <h1> There was an error fetching the data</h1>}
        </div>
      </div>
    </>
  )
}

export default DisplayData
