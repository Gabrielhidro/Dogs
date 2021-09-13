import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context";
import PhotoComments from "../PhotoComments";
import PhotoDelete from "../PhotoDelete";
import {
  Attributes,
  Author,
  Container,
  Details,
  ImageContainer,
  Views,
} from "./styles";

export default function PhotoContent({ data }) {
  const user = React.useContext(UserContext);
  const { photo, comments } = data;

  return (
    <Container>
      <ImageContainer>
        <img src={photo.src} alt={photo.title} />
      </ImageContainer>
      <Details>
        <Author>
          {user.data && user.data.username === photo.author ? (
            <PhotoDelete id={photo.id} />
          ) : (
            <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
          )}
          <Views>{photo.acessos}</Views>
        </Author>
        <h1>
          <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
        </h1>
        <Attributes>
          <li>{photo.peso} Kg</li>
          <li>
            {photo.idade} {photo.idade === 1 ? "Ano" : "Anos"}
          </li>
        </Attributes>
      </Details>
      <PhotoComments id={photo.id} comments={comments} />
    </Container>
  );
}
