import React from "react";
import FeedModal from "./components/FeedModal";
import FeedPhoto from "./components/FeedPhotos";
import { Container } from "./styles";

export default function Feed(){

  const [ modalPhoto, setModalPhoto ] = React.useState(null)

  return (
    <Container>
      {modalPhoto && <FeedModal photo={modalPhoto} />}
      <FeedPhoto setModalPhoto={setModalPhoto} />
    </Container>
  )
}