/* global kakao */
import React, { useEffect } from "react";
// import cn from "classnames";
// import "../styles/Map.scss";

const { kakao } = window;

const KaKaoMap = () => {
  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 13,
    };

    //지도를 생성하는 코드
    let map = new window.kakao.maps.Map(container, options);

    //마커가 표시될 위치를 선언
    const jejudo = new kakao.maps.LatLng(33.450701, 126.570667);

    const Baengnokdam = new kakao.maps.LatLng(
      33.36249480036842,
      126.53274754973836
    );

    //   여러개 마커 표시하기
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
    const imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    for (let i = 0; i < markerPosition.length; i++) {
      const imageSize = new kakao.maps.Size(24, 35);

      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      const jejuMarker = new kakao.maps.Marker({
        map: map, // 마커에 표시할 지도
        position: markerPosition[i].latlng, //마커에 표시할 위치
        title: markerPosition[i].title,
        image: markerImage,
      });
    }

    //  마커를 생성
    const marker = new kakao.maps.Marker({
      //   position: { jejudo },
    });

    //   마커를 지도 위에 표기되도록 설정
    marker.setMap(map);

    // console.log("loading kakaomap");
  }, []);

  return (
    <div className="Map" style={{ height: "100px", margin: "50px" }}>
      <div className="MapContainer" id="map" style={{ height: "100px" }}></div>
    </div>
  );
};

export default KaKaoMap;
