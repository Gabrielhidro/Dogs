import { Container } from "./styles";

export default function FeedPhotosItem({photo, setModalPhoto}){

  function handleClick(){
    setModalPhoto(photo)
  }

  return (
    <Container onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </Container>
  )
}