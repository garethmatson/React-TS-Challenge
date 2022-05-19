import React from 'react'
import fetchImage from '../helpers/fetchImage'
import styled from 'styled-components'

interface PosterProps {
  poster_path: string
}

const PosterContainer = styled.div`
  width: 100%;
`

const PosterImg = styled.img`
  width: 100%;
`
const Poster = ({ poster_path }: PosterProps) => {
  return (
    <PosterContainer>
      <PosterImg src={fetchImage(poster_path)} />
    </PosterContainer>
  )
}

export default Poster
