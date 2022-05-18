import { MovieListItem } from '../shared/types'

export const getTopRated = async (): Promise<MovieListItem[] | null> => {
  let movieList = null
  await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MOVIEDB_KEY}&language=en-US&page=1`, {
    method: 'GET',
  })
    .then((response) => {
      movieList = response.json()
    })
    .catch((err) => {
      console.error('getBadges err', err)
    })
  return movieList
}

export const moviesService = {
  getTopRated,
}
