import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MakeDetail from "../components/makingDetail";

function Detail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return <MakeDetail movie={movie} loading={loading} />;
}

export default Detail;
