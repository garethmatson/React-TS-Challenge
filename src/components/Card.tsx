import React from 'react'
import styled from 'styled-components'
import Poster from './Poster'
import Title from './Title'
import Colors from '../shared/colors'

interface CardProps {
  poster_path: string
  title: string
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: ${Colors.cardBackground};
  border-radius: 10px;
  border-style: solid;
  &:hover {
    background-color: ${Colors.cardBackgroundHover};
  }
`
/**
 * This should be a React component that, at the very least, comprises an image component a title and a description or subheading.
 * Types/Interfaces should be defined in a separate module and imported here
 * @param props
 * @returns
 *
 */
const Card = ({ poster_path, title }: CardProps) => {
  return (
    <CardContainer>
      <Poster poster_path={poster_path} />
      <Title>{title}</Title>
    </CardContainer>
  )
}

export default Card
