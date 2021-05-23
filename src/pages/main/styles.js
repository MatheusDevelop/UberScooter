import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #262e36;
`;
export const Map = styled.View`
  position: absolute;
  flex: 1;
  background-color: red;
`;
export const Title = styled.Text`
  color: white;
  font-size: 32px;
  font-weight: bold;
  margin-top: ${(props) => props.marginTop || 0};
`;

export const BottomScroll = styled.ScrollView.attrs({
  horizontal: true,

  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
  height: 250px;
  position:absolute;
  bottom:0px;
  z-index:98;
  flex-direction:row;
  padding-top:50px;
  padding-left:30px;
`;

export const BikeItem = styled.View`
  width: 130px;
  height: 170px;
  padding:0px 10px;
  border-radius:25px;
  background-color: #4F5963;
  margin: 0px 10px;
  box-shadow:0px 0px 3px black;

`;
export const BikeItemTitle = styled.Text`
  color:white;
  font-weight:bold;
  font-size:24px;
`
export const BikeItemButtonText = styled.Text`
  color:white;
  font-weight:bold;
  font-size:16px;
  margin-left:3px;
`
export const BikeItemSubtitle = styled.Text`
  margin-top:7px;
  color:white;
  opacity:.8;
  font-weight:100;
  font-size:16px;
`
export const BikeItemButton = styled.View`
  width:100px;
  height:40px;
  margin:auto;
  border-radius:35px;
  background-color:#262E36;
  justify-content:center;
  align-items:center;
  flex-direction:row;
`

export var mapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#181818",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1b1b1b",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#2c2c2c",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8a8a8a",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#373737",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#3c3c3c",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#4e4e4e",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3d3d3d",
      },
    ],
  },
];
export const MenuTop = styled.View`
  padding: 30px;
`;
export const TopBox = styled.View`
  width: 100%;
  height: 100px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const ComebackButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: #0078ff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
