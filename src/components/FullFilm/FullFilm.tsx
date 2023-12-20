import Star from '@mui/icons-material/Star';
import { CommentData, FilmData } from '../Film/Film';
import FilmPoster from '../FilmPoster/FilmPoster';
import ffCss from './FullFilm.module.css'; 
import { useState } from 'react';
import { SetComment } from './hooks/SetComment';



const Comment = ({text, user}:CommentData) => {
  return (
    <div className={ffCss.comment_rect}>
      <div className={ffCss.comment_pfp}></div>
      
      <div className={ffCss.comment_data}>
        <div className={ffCss.comment_name}>{user}</div>
        <div className={ffCss.comment_text}>{text}</div>
      </div>
    </div>
  );
}

const FullFilm = ({ id, title, releaseYear, genre, duration, description, rating, director, comments}: FilmData) => {
  const [comment, setComment] = useState("");
  
  const {mutateAsync: addComment, isPending:addCommentLoading} = SetComment({ id, title, releaseYear, genre, duration, description, rating, director, comments})

  return (
    <section className={ffCss.film_container}>
      <h1 className={ffCss.film_title}>{title}</h1>
      <div className={ffCss.film_info}>
        <p>{genre}</p>
        <p>|</p>
        <p>{duration} min</p>
        <p>|</p>
        <p>{releaseYear}</p>
      </div>
      
      <div className={ffCss.film_wrapper}>
        <FilmPoster
          posterName={title}
          posterClass={ffCss.film_poster}
        />
        <div>
          <p className={ffCss.film_desc}>{description}</p>  
          <p className={ffCss.film_director}>Director: {director}</p>
          <div className={ffCss.film_rating}>
              <Star className={ffCss.star} />{rating}
          </div>
        </div>
      </div>

      <section className={ffCss.comment_section}>
        <form id={`mform-${id}`} onSubmit={
            (e) => {
              e.preventDefault();
              if (!addCommentLoading) {addComment(comment),
                setComment("")}
            }
          }>
          <div className={ffCss.comment_wrapper}>
            <label>Comment:</label>
            <textarea
              value={comment} 
              onChange={(v) => {
                setComment(v.currentTarget.value)
            }} />
            <button className={ffCss.submit_btn} type='submit' form={`mform-${id}`}>Submit</button>
          </div>
        </form>
        {
          (comments.length) ?
          comments.map(
            ({text, user}) => <Comment key={Math.random()} text={text} user={user}/>
          ) 
          : <span>Be the first to comment!</span>
        }
        
 
      </section>

    </section>
  );
}

export default FullFilm