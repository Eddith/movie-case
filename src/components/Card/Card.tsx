import React, { useState } from "react";
import styled from "styled-components";

import { IoMdTrash } from "react-icons/io";
import BasicModal from "../BasicModal/BasicModal";
import Button from "../Button/Button";

interface ICard {
  title: string;
  image: string;
  onClick?: () => void;
  year: string;
}

const Card: React.FC<ICard> = (props) => {
  const { title, image, year } = props;

  const [open, setOpen] = useState<boolean>(false);

  const movieListLocal = JSON.parse(localStorage.getItem("movieList") || "[]");

  const deleteMovie = () => {
    movieListLocal.filter((item: any) => item.Title !== title);
    localStorage.setItem("movieList", JSON.stringify(movieListLocal));
    setOpen(false);
  };

  return (
    <Container>
      <Image src={image} alt={title} />
      <BasicModal
        open={open}
        setOpen={setOpen}
        maxWidth={800}
        title={
          <Icon onClick={() => setOpen(true)}>
            <IoMdTrash size="20px" color="red" />
            <Remove>Sil</Remove>
          </Icon>
        }
        value={
          <ModalContainer>
            <ModalTitle>Silmek istediğinize eminmisiniz?</ModalTitle>
            <ModalButton>
              <Button text="Evet" onClick={deleteMovie} disabled={false} />
              <Button
                text="Hayır"
                onClick={() => setOpen(false)}
                disabled={false}
              />
            </ModalButton>
          </ModalContainer>
        }
      />
      <Title>{title}</Title>
      <Title>({year})</Title>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const Image = styled.img`
  width: 200px;
  height: 300px;
`;

const Title = styled.h3`
  font-size: 12px;
  font-weight: 500;
  color: #000;
`;

const Remove = styled.h3`
  font-size: 12px;
  font-weight: 500;
  color: red;
`;

const Icon = styled.div`
  background-color: #ffffff;
  padding: 5px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 10px;
  left: 3px;
`;

const ModalTitle = styled.h3`
  font-size: 12px;
  font-weight: 500;
  color: #000;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ModalButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export default Card;
