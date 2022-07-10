import { useEffect, useState } from 'react';

const useDevice = () => {
  const [device, setDevice] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isPrinting: false,
  });
  
  const handleChangeDevice = () => {
    const screenWidth = window.innerWidth;
    setDevice({
      isMobile: screenWidth < 480,
      isTablet: 480 < screenWidth && screenWidth < 768,
      isDesktop: 768 < screenWidth && screenWidth < 1400,
      isPrinting: screenWidth > 1400,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleChangeDevice);
    handleChangeDevice();
    
    return () => {
      window.removeEventListener('resize', handleChangeDevice);
    }
  }, []);

  return device;
};

export default useDevice;
