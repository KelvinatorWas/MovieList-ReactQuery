import FilmPoster from '../FilmPoster/FilmPoster';
import filmCss from './Film.module.css'
import Star from '@mui/icons-material/Star'
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteFilm } from './hooks/DeleteFilm';

export type CommentData = {
    id?:number;
    user:string;
    text:string;
}

export type FilmData = {
    id: number;
    title: string;
    director: string;
    releaseYear: number;
    genre: string;
    rating: number;
    duration: number;
    description: string;
    comments: CommentData[];
    onClickLink?:(filmTitle:string, filmId:number) => void;
};

const Film = ({id, title, genre, duration, rating, description, director, releaseYear, onClickLink}:FilmData) => {
    
    const { mutateAsync:removeFilm } = deleteFilm()

    return (
    <div className={filmCss.film_container} onClick={() => {}}>
        <FilmPoster 
            posterName={title}
            posterClass={filmCss.film_poster}
        />
        <div className={filmCss.film_data}>
            <p className={filmCss.film_title} onClick={() => {
                if (onClickLink) onClickLink(title, id)
            }}>
                {title} 
            </p>
            <div className={filmCss.release}>({releaseYear})</div>

            <div className={filmCss.film_info}>
                <p>{genre}</p>
                <p>|</p>
                <p>{duration} min</p>
            </div>

            <div className={filmCss.film_rating}>
                <Star className={filmCss.star} />{rating}
            </div>
            <p className={filmCss.film_desc}>
                {description}
            </p>

            <div className={filmCss.film_info}>Director: {director}</div>
            <DeleteIcon 
                className={filmCss.delete_film}
                style={{alignSelf:'flex-end'}}
                onClick={() => removeFilm(id)}    
            />
        </div>
    </div>
    );
}

export default Film