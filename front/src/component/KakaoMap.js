/* global kakao */
import axios from "axios";
import React, { useEffect, useState } from "react";

const KaKaoMap = ({ storeLat, storeLng, storeId }) => {
  const { kakao } = window;
  const [storeLocation, setStoreLocation] = useState();

  const imageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
  const imageSize = new kakao.maps.Size(24, 35);
  const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
  useEffect(() => {
    const container = document.getElementById("map");
    let lat;
    let lon;
    // axios({
    //   url: `https://gloom.loca.lt/v1/shop/${storeId}`,
    //   method: "get",
    // }).then((info) => setStoreLocation(info));

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
    // 내 중심으로 지도가 생성되고, 업체의 마커만 찍어준다.
    // => 전체 지도보기를 봣을 때,

    // 하나의 업체만 보았을때는 하나의 업체의 마커만 찍어주면 된다.

    const map = new kakao.maps.Map(container, options);
  }, []);
  console.log(storeLocation);

  return (
    <div className="Map" style={{ height: "100px", margin: "50px" }}>
      <div className="MapContainer" id="map" style={{ height: "100px" }}></div>
    </div>
  );
};

export default KaKaoMap;
