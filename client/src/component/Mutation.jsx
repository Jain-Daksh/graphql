import { gql, useMutation } from '@apollo/client'
import React, { useState } from 'react'

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

const CREATE_MOVIE_MUTATION = gql`
  mutation createMovie($input: CreateMovieInput!) {
    createMovie(input: $input) {
      id
      name
      isInTheaters
      yearOfPublication
    }
  }
`

const Mutation = () => {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState(21)
  const [nationality, setNationality] = useState('')

  // const [MovieName, setMovieName] = useState('')
  const [yearOfPublication, setyearOfPublication] = useState(0)

  const [createUser] = useMutation(CREATE_USER_MUTATION)
  const [createMovie] = useMutation(CREATE_MOVIE_MUTATION)

  return (
    <div>
      <div>
        <button
          onClick={() => {
            createUser({
              variables: {
                input: { name, age, nationality, username }
              }
            })
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
            setAge(event.target.value)
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
      <br />
      <br /> <br />
      <div>
        <button
          onClick={() => {
            createMovie({
              variables: {
                input: { name, yearOfPublication }
              }
            })
          }}
        >
          Add Movie
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
          placeholder="year"
          onChange={event => {
            setyearOfPublication(Number(event.target.value))
          }}
        />
      </div>
    </div>
  )
}

export default Mutation
