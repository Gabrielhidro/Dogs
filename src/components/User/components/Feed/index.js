import FeedModal from "./components/FeedModal";
import FeedPhoto from "./components/FeedPhotos";
import { Container } from "./styles";

export default function Feed(){
  return (
    <Container>
      <FeedModal />
      <FeedPhoto />
    </Container>
  )
}