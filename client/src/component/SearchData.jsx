import { gql, useLazyQuery } from '@apollo/client'
import React, { useState } from 'react'

const Get_A_Movie_BY_NAME = gql`
  query Movie($name: String!) {
    movie(name: $name) {
      id
      name
      yearOfPublication
    }
  }
`

const SearchData = () => {
  const [movieSearch, setMovieSearch] = useState('')

  const [fetchMovie, { data: movieSearchData, error: movieError }] =
    useLazyQuery(Get_A_Movie_BY_NAME)
  return (
    <div>
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
    </div>
  )
}

export default SearchData
