const fetchImage = (path: string): string => {
  return `https://image.tmdb.org/t/p/w500${path}`
}

export default fetchImage
