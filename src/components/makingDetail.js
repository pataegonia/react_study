import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function MakeDetail({ movie, loading }) {
  const onClick = () => {
    window.open(`https://yts.mx/movies/${movie.slug}`);
  };
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movie.medium_cover_image} />
          <h2>{movie.title_long}</h2>
          <button onClick={onClick}>Goto Watch!</button>
          <h4>rating : {movie.rating}</h4>
          <h4>running time : {movie.runtime}mins</h4>
          <h4>genres</h4>
          {
            <ul>
              {movie.genres.map((genre, idx) => (
                <li key={idx}>{genre}</li>
              ))}
            </ul>
          }
          <h4>description</h4>
          <p>{movie.description_full}</p>
          <br />
        </div>
      )}
    </div>
  );
}

export default MakeDetail;
