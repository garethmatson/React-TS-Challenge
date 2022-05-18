import { useEffect, useState } from 'react'
import { MovieListItem } from '../../shared/types'
import { getTopRated } from '../../services/movies.services'

const useTopRated = () => {
  const [movies, setMovie] = useState<MovieListItem[]>([])
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true)
        const response = await getTopRated()
        if (response != null) {
          setMovie(response)
        }
      } catch (e) {
        setError(e as Error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchMovie()
  }, [])

  return { movies, error, isLoading }
}

export default useTopRated
