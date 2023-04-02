import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Utils
import { movieLanguage, movieYear, imdbRating } from "../utils/settings";

// Redux
import { useSelector } from "react-redux";

// Third Party
import styled from "styled-components";

// Components
import Card from "../components/Card/Card";
import Dropdown from "../components/Dropdown/Dropdown";

const ListMovie: React.FC = () => {
  // REACT-ROUTER
  const navigate = useNavigate();

  // REDUX STATE
  const { getMoviResp } = useSelector((state: any) => state.movie);

  const [movieListLocal, setMovieListLocal] = React.useState<any>([]);

  useEffect(() => {
    getMoviResp?.Search
      ? localStorage.setItem("movieList", JSON.stringify(getMoviResp?.Search))
      : localStorage.setItem("movieList", JSON.stringify([]));
  }, [getMoviResp]);

  const movieList =
    getMoviResp?.Search &&
    [...getMoviResp?.Search].sort((a: any, b: any) => {
      const yearA = a.Year.slice(0, 4);
      const yearB = b.Year.slice(0, 4);
      return yearB - yearA;
    });

  useEffect(() => {
    if (typeof window !== "undefined") {
      let data: any = window.localStorage.getItem("movieList");
      if (data) {
        let parsedData = JSON.parse(data);
        if (parsedData) {
          setMovieListLocal(parsedData);
        }
      } else {
        navigate("/");
      }
    }
  }, [getMoviResp]);

  return (
    <Container>
      <MovieList>
        <MovieItem>
          <MovieSearch>
            {localStorage.getItem("moviName") &&
              localStorage.getItem("moviName")}{" "}
            için Sonuçlar
          </MovieSearch>
          <MovieLength>{movieList && movieList.length} bulundu</MovieLength>
        </MovieItem>
        <Divider />
        <DropdownContainer>
          <Dropdown people={movieLanguage} />
          <Dropdown people={movieYear} />
          <Dropdown people={imdbRating} />
        </DropdownContainer>
        <Grid>
          {movieList &&
            movieList.map((item: any, index: any) => {
              return (
                <Card
                  key={index}
                  title={item.Title}
                  image={item.Poster}
                  year={item.Year}
                />
              );
            })}
        </Grid>
      </MovieList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  margin-top: 20px;
`;

const MovieSearch = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #0f91fd;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    margin-bottom: 5px;
    margin-top: 20px;
  }
`;

const MovieLength = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #c2c2c2;
  margin-bottom: 20px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #0f91fd;
  margin-bottom: 10px;
`;

const MovieList = styled.div`
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  overflow-y: auto;
  height: 100vh;
`;

const MovieItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const DropdownContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default ListMovie;
