/* global kakao */
import React, { useEffect } from "react";

const KaKaoMap = () => {
  const { kakao } = window;

  const imageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
  const imageSize = new kakao.maps.Size(24, 35);
  const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

  useEffect(() => {
    const container = document.getElementById("map");
    let lat;
    let lon;

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
      navigator.geolocation.getCurrentPosition(function (position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;

        let locPosition = new kakao.maps.LatLng(lat, lon);
        let message = '<div style="padding:5px;">현위치</div>';

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

  const markerPosition = [
    {
      title: "제주도",
      latlng: new kakao.maps.LatLng(33.450701, 126.570667),
    },
    {
      title: "백록담",
      latlng: new kakao.maps.LatLng(33.36249480036842, 126.53274754973836),
    },
  ];

  // 여러개의 마커를 찍는 함수
  // 서버에서 위도, 경도를 받아서 사용할 예정.
  const createMarker = () => {
    for (let i = 0; i < markerPosition.length; i++) {
      // 이미지의 사이즈를 정하는 인스턴스 생성
      // const jejuMarker = new kakao.maps.Marker({
      //   map: map, // 마커에 표시할 지도
      //   position: markerPosition[i].latlng, //마커에 표시할 위치
      //   title: markerPosition[i].title,
      //   image: markerImage,
      // });
    }
  };

  return (
    <div className="Map" style={{ height: "100px", margin: "50px" }}>
      <div className="MapContainer" id="map" style={{ height: "100px" }}></div>
    </div>
  );
};

export default KaKaoMap;
