import { Container } from "./styles";

export default function FeedPhotosItem({photo}){
  return (
    <Container>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </Container>
  )
}