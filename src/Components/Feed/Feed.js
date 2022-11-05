import React, { useEffect, useState } from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    const infiniteScroll = () => {
      if (infinite) {
        let wait = false;
        const { scrollY } = window;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scrollY > height * 0.75 && wait === false) {
          wait = true;
          setPages((prev) => [...prev, prev.length + 1]);
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    };
    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);

    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal setModalPhoto={setModalPhoto} photo={modalPhoto} />
      )}
      {pages.map((p) => (
        <FeedPhotos
          key={p}
          user={user}
          page={p}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  );
};

export default Feed;
