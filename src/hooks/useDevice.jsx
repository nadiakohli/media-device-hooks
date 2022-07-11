import { useEffect, useState } from 'react';

//Hooks
import useMedia from './useMedia';

const useDevice = () => {
  const isMobile = useMedia('(max-width: 480px)');
  const isTablet = useMedia('(min-width: 481px) and (max-width: 768px)');
  const isDesktop = useMedia('(min-width: 769px)');
  const [isPrinting, setIsPrinting] = useState(false);

  const beforePrintHandler = () => {
		setIsPrinting(true);
	};

	const afterPrintHandler = () => {
		setIsPrinting(false);
	};

  useEffect(() => {
		window.addEventListener('beforeprint', beforePrintHandler);
		window.addEventListener('afterprint', afterPrintHandler);

		return () => {
			window.removeEventListener('beforeprint', beforePrintHandler);
			window.removeEventListener('afterprint', afterPrintHandler);
		};
    
	}, []);

  return { 
    isMobile, 
    isTablet, 
    isDesktop, 
    isPrinting,
  };
};

export default useDevice;
