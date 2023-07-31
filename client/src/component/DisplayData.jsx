import { gql, useMutation, useQuery } from '@apollo/client'
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

const CREATE_USER_MUTATION = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      name
      age
      id
      nationality
      username
    }
  }
`

const DisplayData = () => {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState(21)
  const [nationality, setNationality] = useState('')

  const [createUser] = useMutation(CREATE_USER_MUTATION)

  const { data, loading, error, refetch } = useQuery(QUERY_ALL_USERS)
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

      <div>
        <button
          onClick={() => {
            createUser({
              variables: {
                input: { name, age, nationality, username }
              }
            })
            refetch()
          }}
        >
          Add User
        </button>
        <input
          type="text"
          placeholder="name"
          onChange={event => {
            setName(event.target.value)
          }}
        />
        <input
          type="number"
          placeholder="age"
          onChange={event => {
            setAge(Number(event.target.value))
          }}
        />
        <input
          type="text"
          placeholder="username"
          onChange={event => {
            setUsername(event.target.value.toUpperCase())
          }}
        />
        <input
          type="text"
          placeholder="nationality"
          onChange={event => {
            setNationality(event.target.value)
          }}
        />
      </div>
    </>
  )
}

export default DisplayData
