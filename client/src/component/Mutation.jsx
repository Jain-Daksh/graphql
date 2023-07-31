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

const Mutation = () => {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState(21)
  const [nationality, setNationality] = useState('')

  const [createUser] = useMutation(CREATE_USER_MUTATION)

  return (
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
  )
}

export default Mutation
