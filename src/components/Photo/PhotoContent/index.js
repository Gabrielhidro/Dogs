import { Link } from "react-router-dom";
import PhotoComments from "../PhotoComments";
import { Container } from "./styles";

export default function PhotoContent({data}){

  const {photo, comments} = data

  return (
    <Container>
      <div>
        <img src={photo.src} alt={photo.title}/>
      </div>
      <div>
        <div>
          <p>
            <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
            <span>{photo.acessos}</span>
          </p>
          <h1>
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul>
            <li>{photo.peso} Kg</li>
            <li>{photo.idade} {photo.idade === 1 ? 'Ano' : 'Anos'}</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </Container>
  )
}