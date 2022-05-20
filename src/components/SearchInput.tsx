import React from 'react'
import styled from 'styled-components'
import Colors from '../shared/colors'

const SearchInputContainer = styled.input`
  height: 50px;
  width: 50%;
  border-radius: 5rem;
  padding: 0px 15px;
  margin-bottom: 3rem;
  background-color: ${Colors.inputBackground};
  @media (max-width: 768px) {
    width: 90%;
  }
`

interface SearchInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = ({ onChange }: SearchInputProps) => {
  return <SearchInputContainer onChange={onChange} placeholder={'Search...'} />
}

export default SearchInput
