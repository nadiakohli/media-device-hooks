import { useState, useEffect } from 'react';

const useMedia = (media) => {
  const [hasMedia, setHasMedia] = useState(() => window.matchMedia(media).matches);

    useEffect(() => {
      const listener = (e) => {
        setHasMedia(e.matches);
      };

      window.matchMedia(media).addEventListener('change', listener);
      
      return () => {
        window.matchMedia(media).removeEventListener('change', listener);
      }
    }, [media]);

    return hasMedia;
  };

export default useMedia;
