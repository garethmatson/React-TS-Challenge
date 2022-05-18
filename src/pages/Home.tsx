import React from 'react'
import useTopRated from '../hooks/useTopRated'
import Card from '../components/Card'

export const Home = () => {
  const { movies, error, isLoading } = useTopRated()
  return (
    <>
      <h1>Top Rated Movies List</h1>
      <div className="App" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', rowGap: '10px', columnGap: '20px' }}>
        {/* <Card image={dummyData.image} name={dummyData.name} home_port={dummyData.home_port} roles={dummyData.roles} /> */}
      </div>
    </>
  )
}

export default Home
