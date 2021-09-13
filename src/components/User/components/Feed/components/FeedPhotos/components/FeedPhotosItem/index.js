import ImageLoading from "../../../../../../../../shared/helper/ImageLoading";
import { Container } from "./styles";

export default function FeedPhotosItem({photo, setModalPhoto}){

  function handleClick(){
    setModalPhoto(photo)
  }

  return (
    <Container onClick={handleClick}>
      <ImageLoading src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </Container>
  )
}