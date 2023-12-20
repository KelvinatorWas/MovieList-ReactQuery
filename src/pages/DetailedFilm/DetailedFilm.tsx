import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { readDataOne } from "../../utils/crud";
import { SERVER_LINK } from "../../components/FilmManager/FilmManager";
import { FilmData } from "../../components/Film/Film";
import FullFilm from "../../components/FullFilm/FullFilm";


const DetailedFilm = () => {
  const location = useLocation();
  const filmId = location.state?.filmId;

  if (!filmId) return <span>Error 404</span>

  const {data:film, isLoading, error} = useQuery(
    {
      queryKey:['film', filmId],
      queryFn: () => {
        return readDataOne<FilmData>(`${SERVER_LINK}/${filmId}`);
      }
    }
  );
  
  if (isLoading) return <span>Loading...</span> 
  if (error) return <span>Error 404</span>
  if (!film) return <span>Error 404</span>
  
  const {id, title, releaseYear, genre, duration, description, rating, director, comments} = film;
  
  return (
    <FullFilm
      id={id}
      key={id}
      title={title}
      releaseYear={releaseYear}
      genre={genre}
      duration={duration}
      description={description}
      rating={rating}
      director={director}
      comments={comments}
    />
  );
}

export default DetailedFilm