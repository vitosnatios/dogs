import { useEffect, useState } from 'react';

const useMedia = (media) => {
  const [match, setMatch] = useState(null);

  useEffect(() => {
    const changeMatch = () => {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    };
    window.addEventListener('resize', changeMatch);
    changeMatch();
    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [media, match]);

  return match;
};

export default useMedia;
