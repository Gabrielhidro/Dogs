import { Link } from "react-router-dom";
import PhotoComments from "../PhotoComments";
import { Author, Container, Details, ImageContainer, Views } from "./styles";

export default function PhotoContent({data}){

  const {photo, comments} = data

  return (
    <Container>
      <ImageContainer>
        <img src={photo.src} alt={photo.title}/>
      </ImageContainer>
      <Details>
          <Author>
            <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
            <Views>{photo.acessos}</Views>
          </Author>
          <h1>
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul>
            <li>{photo.peso} Kg</li>
            <li>{photo.idade} {photo.idade === 1 ? 'Ano' : 'Anos'}</li>
          </ul>
      </Details>
      <PhotoComments id={photo.id} comments={comments} />
    </Container>
  )
}