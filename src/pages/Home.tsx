import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { getMovie } from "../redux/slices/MovieSlice";

import { useNavigate } from "react-router-dom";

// Third Party
import styled from "styled-components";

// Components
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import BasicModal from "../components/BasicModal/BasicModal";

const Home: React.FC = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  // REACT-HOOKS
  const [movieName, setMovieName] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  // MOVİE ADD
  const [movieTitle, setMovieTitle] = useState<string>("");
  const [imdbrating, setImdbrating] = useState<string>("");
  const [actors, setActors] = useState<string>("");
  const [movieImage, setMovieImage] = useState<string>("");
  const [movieDescription, setMovieDescription] = useState<string>("");

  const listMovie = () => {
    if (movieName.length >= 3) {
      dispatch(getMovie(movieName));
      localStorage.setItem("moviName", movieName);
      navigate("/list-movie");
    } else {
      alert("listeleme yapmadan önce ismi giriniz.");
    }
  };

  const movieListLocal = JSON.parse(localStorage.getItem("movieList") || "[]");

  const addMovie = () => {
    const movie = {
      Title: movieTitle,
      imdbRating: imdbrating,
      Actors: actors,
      Poster: movieImage,
      Plot: movieDescription,
    };
    if (
      movieTitle !== "" &&
      imdbrating !== "" &&
      actors !== "" &&
      movieImage !== "" &&
      movieDescription !== ""
    ) {
      movieListLocal.push(movie);
      setMovieTitle("");
      setImdbrating("");
      setActors("");
      setMovieImage("");
      setMovieDescription("");
    } else {
      alert("Lütfen tüm alanları doldurunuz.");
    }
    setOpen(false);
  };

  return (
    <Container>
      <ButtonContainer>
        <BasicModal
          setOpen={setOpen}
          open={open}
          maxWidth={800}
          title={
            <Button
              text="Film Ekle +"
              onClick={() => setOpen(true)}
              disabled={false}
            />
          }
          value={
            <ModalContainer>
              <InputContainer>
                <Input
                  placeholder="Film Adı"
                  onChange={(e) => {
                    setMovieTitle(e.target.value);
                  }}
                  disabled={false}
                  type="text"
                  value={movieTitle}
                  required
                />
                <Input
                  placeholder="IMDB Puanı"
                  onChange={(e) => {
                    setImdbrating(e.target.value);
                  }}
                  disabled={false}
                  type="text"
                  value={imdbrating}
                  required
                />
                <Input
                  placeholder="Oyuncular"
                  onChange={(e) => {
                    setActors(e.target.value);
                  }}
                  disabled={false}
                  type="text"
                  value={actors}
                  required
                />
              </InputContainer>
              <InputContainer>
                <Input
                  placeholder="Film Görseli"
                  onChange={(e) => {
                    setMovieImage(e.target.value);
                  }}
                  disabled={false}
                  type="text"
                  value={movieImage}
                  required
                />
                <Input
                  placeholder="Film Kısa Açıklama"
                  onChange={(e) => {
                    setMovieDescription(e.target.value);
                  }}
                  disabled={false}
                  type="text"
                  value={movieDescription}
                  required
                />
              </InputContainer>
              <Button text="Film Ekle +" onClick={addMovie} disabled={false} />
            </ModalContainer>
          }
        />
        <Button text="Film Listele" onClick={listMovie} disabled={false} />
      </ButtonContainer>
      <Input
        placeholder="Bulmak istediğiniz filmin adını yazınız"
        onChange={(e) => {
          setMovieName(e.target.value);
        }}
        disabled={false}
        type="text"
        value={movieName}
      />
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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default Home;
