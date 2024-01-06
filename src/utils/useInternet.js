import { useEffect, useState } from 'react';

const useInternet = () => {
  const [isOffline, setIsOffline] = useState();
  useEffect(() => {
    const handleOffline = () => {
      setIsOffline(true);
    };
    const handleOnline = () => {
      setIsOffline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOffline);
      window.removeEventListener('offline', handleOnline);
    };
  }, []);

  return isOffline;
};
export default useInternet;
