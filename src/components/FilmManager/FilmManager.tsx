import Film from '../Film/Film'
import fmCss from './FilmManager.module.css'
import { useNavigate, } from 'react-router-dom';
import { getFilms } from './hooks/GetFilms';


export const SERVER_LINK = "http://localhost:3004/films";

const FilmManager = () => {
    const navigate = useNavigate()

    const {data:films, isLoading} = getFilms();

    if (isLoading) return <span>Loading...</span>

    const handleClickFilm = (filmTitle:string, filmId:number) => {
        navigate(`${filmTitle.replace(/[\s]/g, "")}`, {state: { filmId}});
    }

    return (
        <div className={fmCss.film_container}>
            {films?.map(({genre, id, title, duration, rating, description, director, releaseYear, comments}) => {
                return <Film 
                    key={id}
                    id={id}
                    title={title}
                    genre={genre}
                    duration={duration}
                    rating={rating}
                    description={description}
                    director={director}
                    releaseYear={releaseYear}
                    comments={comments} // yeah ik shouldnt be done like this, but its only couple of comments so it should be fine, for now
                    onClickLink={handleClickFilm}
                />
            })}
        </div>
    )
}

export default FilmManager