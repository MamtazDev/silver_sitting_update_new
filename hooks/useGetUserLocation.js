import React, { useEffect, useState } from "react";

const useGetUserLocation = () => {
  const [lat, setLatitude] = useState(null);
  const [lon, setLongitude] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position,"ppppppossss")
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, []);

  return { lat, lon };
};

export default useGetUserLocation;
