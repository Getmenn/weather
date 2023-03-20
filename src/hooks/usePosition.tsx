import { useState, useEffect } from 'react';

interface Coordinates {
  lat: number;
  lon: number;
}

interface Position {
  coordinates: Coordinates;
  error: string | null;
}

const usePosition = (): Position => { //при определении из браузера город не сохраняется
  const [position, setPosition] = useState<Coordinates>({ lat: 0, lon: 0 });
  const [error, setError] = useState<string | null>(null);
  let watcher: number;

  const onChange = ({ coords }: GeolocationPosition) => {
    setPosition({ lat: coords.latitude, lon: coords.longitude });
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
        const { lat } = position
        if (lat !== 0) {
          localStorage.setItem('position', JSON.stringify(position))
        } 
    }

  return { coordinates: position, error };
}

export { usePosition };