import React from 'react'
import useTopRated from '../hooks/useTopRated'
import Card from '../components/Card'
import Title from '../components/Title'
import styled from 'styled-components'

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

export const Home = () => {
  const { movies, error, isLoading } = useTopRated()

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (error && !movies) {
    return <Title>Error loading movies.</Title>
  }

  return (
    <>
      <Title>Top Rated Movies List</Title>
      <ListContainer>
        {movies &&
          movies.map((movie, index) => {
            return <Card key={index} title={movie.title} poster_path={movie.poster_path ?? ''} />
          })}
      </ListContainer>
    </>
  )
}

export default Home
