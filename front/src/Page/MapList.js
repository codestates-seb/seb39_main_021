import { useEffect, useRef } from "react";

const MapList = () => {
  // const NAVER_ID = process.env.REACT_APP_NAVER_MAP_CLIENT_ID;
  // const NAVER_SECRET = process.env.REACT_APP_NAVER_MAP_CLIENT_SECRET;

  const MapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!MapElement.current || !naver) return;
    // early return
    console.log(naver);
    const location = new naver.maps.LatLng(37.3595704, 127.105399);
    const mapOption = {
      center: location,
      zoom: 10,
      zoomControl: true,
      zoomControlOption: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };

    const map = new naver.maps.Map(MapElement.current, mapOption);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, []);

  return <div id="map" ref={MapElement} style={{ minHeight: "400px" }}></div>;
};

export default MapList;
