import { useState, useEffect } from 'react';

const useMedia = (media) => {
  const [hasMedia, setHasMedia] = useState(window.matchMedia(media).matches);

    useEffect(() => {
      window.matchMedia(media).onchange = (e) => {
        setHasMedia(e.matches);
      }
    }, [media]);

    return hasMedia;
  };

export default useMedia;
