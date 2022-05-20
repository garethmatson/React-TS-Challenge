import React, { useState, useEffect, useCallback } from 'react'
import useTopRated from '../hooks/useTopRated'
import Poster from '../components/Poster'
import Title from '../components/Title'
import BodyText from '../components/Body'
import LoadingSpinner from '../components/LoadingSpinner'
import styled from 'styled-components'
import Colors from '../shared/colors'
import { MovieListItem } from '../shared/types'
import { useParams } from 'react-router-dom'

const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5%;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`
const PosterContainer = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const DetailsContainer = styled.div`
  width: 50%;
  flex-direction: column;
  margin-left: 5%;
  margin-top: 5%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const MovieDetails = () => {
  const { movies, error, isLoading } = useTopRated()
  const { id } = useParams()
  const [displayedMovie, setDisplayedMovie] = useState<MovieListItem | undefined>(undefined)

  useEffect(() => {
    if (movies) {
      setDisplayedMovie(movies.find((movie) => movie.id === Number(id)))
    }
  }, [movies, id])

  if (isLoading) {
    return <LoadingSpinner />
  }

  if ((error && !movies) || !displayedMovie) {
    return <Title>Error loading movie.</Title>
  }

  return (
    <>
      <Title>
        {displayedMovie.title} {displayedMovie.release_date}
      </Title>
      <MovieDetailsContainer>
        <PosterContainer>
          <Poster poster_path={displayedMovie.poster_path || ''} />
        </PosterContainer>
        <DetailsContainer>
          <BodyText>{displayedMovie.overview}</BodyText>
          <Title>Vote Count: {displayedMovie.vote_count}</Title>
        </DetailsContainer>
      </MovieDetailsContainer>
    </>
  )
}

export default MovieDetails
