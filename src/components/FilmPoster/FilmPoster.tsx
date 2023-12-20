type PosterData = {
  posterName:string;
  posterClass:string;
}

const FilmPoster = ({ posterName, posterClass }:PosterData) => {

  const src =  `url(/movie_poster/${posterName.replace(/[\s']/g, '')}.jpg)`
  return (
    <div className={posterClass} style={{background:src, backgroundSize:"100%", backgroundRepeat:"no-repeat"}}></div>
  )
}

export default FilmPoster