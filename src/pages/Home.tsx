import React, { useState, useEffect, useCallback } from 'react'
import useTopRated from '../hooks/useTopRated'
import Card from '../components/Card'
import Title from '../components/Title'
import SearchInput from '../components/SearchInput'
import LoadingSpinner from '../components/LoadingSpinner'
import styled from 'styled-components'
import Colors from '../shared/colors'
import { MovieListItem } from '../shared/types'
import debounce from 'lodash.debounce'

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 10px;
  column-gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const Home = () => {
  const { movies, error, isLoading } = useTopRated()
  const [displayedMovies, setDisplayedMovies] = useState<MovieListItem[] | null>(null)

  const movieQueryResult = useCallback(
    (query: string) => {
      if (movies) {
        setDisplayedMovies(movies.filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase())))
      }
    },
    [setDisplayedMovies, movies]
  )

  //added useCallbacks to make more performant
  const onUpdateSearchQuery = useCallback(
    (query: string) => {
      movieQueryResult(query)
    },
    [movieQueryResult]
  )

  const onDebouncedUpdateSearchQuery = debounce(onUpdateSearchQuery, 1000)

  // Remove in-line function to make more performant
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onDebouncedUpdateSearchQuery(event.target.value)
  }

  useEffect(() => {
    setDisplayedMovies(movies)
  }, [movies])

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (error && !movies) {
    return <Title>Error loading movies.</Title>
  }

  return (
    <>
      <Title>Top Rated Movies List</Title>
      <SearchInput onChange={onInputChange} />
      <ListContainer>
        {displayedMovies &&
          displayedMovies.map((movie, index) => {
            return <Card key={index} id={movie.id} title={movie.title} poster_path={movie.poster_path ?? ''} />
          })}
      </ListContainer>
    </>
  )
}

export default Home
