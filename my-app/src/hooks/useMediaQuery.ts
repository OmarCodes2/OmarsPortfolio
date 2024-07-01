import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = () => setMatches(mediaQuery.matches);

    handleChange(); // Check the initial state
    mediaQuery.addListener(handleChange); // Add event listener

    return () => mediaQuery.removeListener(handleChange); // Clean up event listener
  }, [query]);

  return matches;
};
