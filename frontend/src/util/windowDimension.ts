import { useEffect, useState } from 'react';

type ScreenSize = {
  width: number;
  height: number;
};

function useScreenSize(): ScreenSize {
  const [screenSize, setScreenSize] = useState<ScreenSize>({ width: 0, height: 0 });

  useEffect(() => {
    // Function to update screen size
    const updateSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Initial size update
    updateSize();

    // Add event listener for window resize
    window.addEventListener('resize', updateSize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return screenSize;
}

export default useScreenSize;
