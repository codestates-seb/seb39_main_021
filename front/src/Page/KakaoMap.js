/* global kakao */
import React, { useEffect } from "react";

const KaKaoMap = () => {
  const { kakao } = window; // 윈도우 객체에 kakao 변수 구조분해할당

  const imageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; // 마커로 사용될 이미지 경로

  const imageSize = new kakao.maps.Size(24, 35); // 마커의 사이즈 인스턴스

  const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); // 마커 생성 인스턴스

  useEffect(() => {
    let container = document.getElementById("map"); // 1. 엘리먼트 선택
    let lat;
    let lon;

    const displayMarker = (localPosition, message) => {
      const marker = new kakao.maps.Marker({
        map: map,
        position: localPosition,
        image: markerImage,
      });

      let markerMessage = message; // 윈도우에 표시될 내용
      let markerRemoveAble = true;

      const infoWindow = new kakao.maps.InfoWindow({
        content: markerMessage,
        removable: markerRemoveAble,
      });

      infoWindow.open(map, marker);
      map.setCenter(localPosition);
    };

    if (navigator.geolocation) {
      // 2, 내 위치를 찾는 함수
      navigator.geolocation.getCurrentPosition(function (position) {
        lat = position.coords.latitude; // 위도
        lon = position.coords.longitude; // 경도

        // 마커에 표시될 위치를 geolocation로 얻어온 좌표
        let locPosition = new kakao.maps.LatLng(lat, lon);
        // 윈도우에 표시될 내용
        let message = '<div style="padding:5px;">현위치</div>';

        console.log(lat, lon);
        displayMarker(locPosition, message);
      });
    } else {
      var locPosition = new kakao.maps.LatLng(
          37.4812845080678,
          126.952713197762
        ),
        message = "현재 위치를 알 수 없어 기본 위치로 이동합니다.";

      displayMarker(locPosition, message);
    }

    // 3. 옵션을 설정하는데, 지도의 중심이 되는 위치는 2번에서 받았던 내 위치 좌표를, 줌은 5단계로 고정.
    let options = {
      center: new kakao.maps.LatLng(lat, lon),
      level: 13,
    };
    console.log(lat, lon);

    // 4. 지도 인스턴스 생성.(엘리먼트, 옵션)
    let map = new kakao.maps.Map(container, options);
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

  // 여러개의 마커를 생성하기 위한 반복문
  for (let i = 0; i < markerPosition.length; i++) {
    // 이미지의 사이즈를 정하는 인스턴스 생성
    // const jejuMarker = new kakao.maps.Marker({
    //   map: map, // 마커에 표시할 지도
    //   position: markerPosition[i].latlng, //마커에 표시할 위치
    //   title: markerPosition[i].title,
    //   image: markerImage,
    // });
  }
  const marker = new kakao.maps.Marker({
    // position: { jejudo },
  });

  // marker.setMap(map);

  // 내 위치를 받아오는 코드
  // if (navigator.geolocation) {
  //   console.log("성공!");
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     let lat = position.coords.latitude; // 위도
  //     let lon = position.coords.longitude; // 경도

  //     let locPosition = new kakao.maps.LatLng(lat, lon);

  //     displayMarker();
  //   });
  // }

  //마커가 표시될 위치를 선언
  const jejudo = new kakao.maps.LatLng(33.450701, 126.570667);

  const Baengnokdam = new kakao.maps.LatLng(
    33.36249480036842,
    126.53274754973836
  );

  return (
    <div className="Map" style={{ height: "100px", margin: "50px" }}>
      <div className="MapContainer" id="map" style={{ height: "100px" }}></div>
    </div>
  );
};

export default KaKaoMap;
