import React from "react";
import FeedModal from "./components/FeedModal";
import FeedPhoto from "./components/FeedPhotos";
import { Container } from "./styles";
import PropTypes from 'prop-types'

export default function Feed({ user }) {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let wait = false;

    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const heith = document.body.offsetHeight - window.innerHeight;

        if (scroll > heith * .75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite]);

  return (
    <Container>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}

      {pages.map((page) => (
        <FeedPhoto
          key={page}
          user={user}
          page={page}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
    </Container>
  );
}

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ])
}
