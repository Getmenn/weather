import { useState, useEffect } from 'react';

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface Position {
  coordinates: Coordinates;
  error: string | null;
}

const usePosition = (): Position => {
  const [position, setPosition] = useState<Coordinates>({ latitude: 0, longitude: 0 });
  const [error, setError] = useState<string | null>(null);
  let watcher: number;

  const onChange = ({ coords }: GeolocationPosition) => {
    setPosition({ latitude: coords.latitude, longitude: coords.longitude });
  };

  const onError = (error: GeolocationPositionError) => {
    setError(error.message);
  };

useEffect(() => {
    if (localStorage.getItem('position') === null) {
        const geo = navigator.geolocation;

        if (!geo) {
            setError('Геолокация не поддерживается браузером');
            return;
        }

        watcher = geo.watchPosition(onChange, onError);

        return () => geo.clearWatch(watcher);
    }
  }, []);
    
    if (localStorage.getItem('position') === null && error === null) {
        const { latitude } = position
        if (latitude !== 0) {
            localStorage.setItem('position', JSON.stringify(position))
        } 
    }

  return { coordinates: position, error };
}

export { usePosition };