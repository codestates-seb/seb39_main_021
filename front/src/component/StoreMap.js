/* global kakao */
import { useEffect } from "react";

const StoreMap = ({ storeLat, storeLng }) => {
  const { kakao } = window;

  const imageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
  const imageSize = new kakao.maps.Size(24, 35);
  const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

  useEffect(() => {
    const container = document.getElementById("map");

    const displayMarker = (localPosition, message) => {
      const marker = new kakao.maps.Marker({
        map: map,
        position: localPosition,
        image: markerImage,
      });

      let markerMessage = message;
      let markerRemoveAble = true;

      const infoWindow = new kakao.maps.InfoWindow({
        content: markerMessage,
        removable: markerRemoveAble,
      });

      infoWindow.open(map, marker);
      map.setCenter(localPosition);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function () {
        let locPosition = new kakao.maps.LatLng(storeLng, storeLat);
        let message = '<div style="padding:5px;">여기</div>';

        displayMarker(locPosition, message);
      });
    } else {
      var locPosition = new kakao.maps.LatLng(33.499655, 126.531362),
        message = "현재 위치를 알 수 없어 기본 위치로 이동합니다.";
      console.log("err");
      displayMarker(locPosition, message);
    }

    const options = {
      center: new kakao.maps.LatLng(35.85133, 127.734086),
      level: 5,
    };

    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <div className="Map" style={{ height: "100px", margin: "50px" }}>
      <div className="MapContainer" id="map" style={{ height: "100px" }}></div>
    </div>
  );
};

export default StoreMap;
