import React, {useState, useEffect, useCallback} from 'react'
import useTopRated from '../hooks/useTopRated'
import Card from '../components/Card'
import Title from '../components/Title'
import styled from 'styled-components'
import Colors from '../shared/colors'
import {MovieListItem} from '../shared/types'
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

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #383636; /* Black */
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
  flex: 1;
  align-self: center;
`

const SearchInput = styled.input`
  height: 50px;
  width: 50%;
  border-radius: 5rem;
  padding: 0px 15px;
  margin-bottom: 3rem;
  background-color: ${Colors.inputBackground};
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Home = () => {
  const { movies, error, isLoading } = useTopRated()
  const [displayedMovies, setDisplayedMovies] = useState<MovieListItem[] | null>(null)

  const onUpdateSearchQuery = (query: string) => {
    movieQueryResult(query)
  }
  const onDebouncedUpdateSearchQuery = useCallback(debounce(onUpdateSearchQuery, 1000), [onUpdateSearchQuery])

  const movieQueryResult = (query: string) => {
    if(movies) {
     setDisplayedMovies(movies.filter(movie => movie.title.includes(query)))
    }
  }

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
            return <Card key={index} title={movie.title} poster_path={movie.poster_path ?? ''} />
          })}
      </ListContainer>
    </>
  )
}

export default Home
