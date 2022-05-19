import { MovieListItem, TopRatedMovies } from '../shared/types'

export const getTopRated = async (): Promise<MovieListItem[] | null> => {
  let movieList = null
  await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MOVIEDB_KEY}&language=en-US&page=1`, {
    method: 'GET',
  })
    .then(async (response) => {
      const responseJson = await ((await response.json()) as Promise<TopRatedMovies>)
      movieList = responseJson.results.slice(0, 10)
    })
    .catch((err) => {
      console.error('getTopRated err', err)
    })
  return movieList
}

export const moviesService = {
  getTopRated,
}
