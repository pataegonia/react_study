import PropTypes from "prop-types";

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
          <img src={movie.medium_cover_image} alt={movie.title} />
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

MakeDetail.propTypes = {
  movie: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default MakeDetail;
