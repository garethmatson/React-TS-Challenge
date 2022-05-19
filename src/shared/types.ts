export type MovieListItem = {
  poster_path: string | null
  title: string
  overview: string
  release_date: string
  vote_count: number
}

export type TopRatedMovies = {
  page: number
  results: MovieListItem[]
  total_pages: number
  total_results: number
}
