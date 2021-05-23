import React, { useEffect, useState } from 'react';
import { BottomScroll, Container, Map, mapStyle } from './styles';
import { Top } from './Top';
import MapView, { PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import { StyleSheet, Dimensions, Text } from 'react-native';
import * as Location from 'expo-location';
import { LinearGradient } from 'expo-linear-gradient';
import { BikeComponentItem } from './BikeComponentItem';

const Main = () => {
  const [Latitude, setLatitude] = useState(0)
  const [Longitude, setLongitude] = useState(0)
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude)
      setLongitude(location.coords.longitude)

    })();
  }, [])
  return (
    <Container>

      <LinearGradient

        colors={['#262e36', 'transparent']}
        style={{ zIndex: 99 }}>
        <Top />
      </LinearGradient>
      <Map>
        <MapView
          region={
            {
              latitude: Latitude,
              longitude: Longitude,
              longitudeDelta: 0.0134,
              latitudeDelta: 0.0143
            }

          }
          loadingEnabled
          showsUserLocation
          provider={PROVIDER_GOOGLE}
          style={styles.map} customMapStyle={mapStyle}>
        </MapView>
      </Map>

      <LinearGradient
        pointerEvents="none"
        colors={['transparent', '#262e36']}
        style={{
          zIndex: 97, position: 'absolute', bottom: 0, height: 400, width: '100%'
        }}>
      </LinearGradient>
      <BottomScroll>
        <BikeComponentItem picUrl={"https://i.pinimg.com/originals/2a/24/39/2a24399747cdb840783b909b7da9844d.png"} name={"Razor"} number={"SCP0346"} distance={"2.4"}/>
        <BikeComponentItem picUrl={"http://pngimg.com/uploads/bicycle/bicycle_PNG5387.png"} name={"Hitech"} number={"SCP0346"} distance={"1.4"}/>
        <BikeComponentItem picUrl={"https://www.funmotors.com.br/upload/cores/thumb/thumb-070032.png"} name={"Confort"} number={"SCP0346"} distance={"0.4"}/>
        <BikeComponentItem picUrl={"http://pngimg.com/uploads/bicycle/small/bicycle_PNG5364.png"} name={"Scooter"} number={"SCP0346"} distance={"2.5"}/>
        <BikeComponentItem picUrl={"https://www.megateh.eu/files/products/00/20/51/mi-electric-scooter.png"} name={"Ruby"} number={"SCP0346"} distance={"6.4"}/>
        <BikeComponentItem picUrl={"https://freepngimg.com/thumb/bike/23269-1-kick-scooter.png"} name={"Doe"} number={"SCP0346"} distance={"2.4"}/>
        <BikeComponentItem picUrl={"https://cdn-reichelt.de/bilder/web/xxl_ws/E910/XIAOMI_SCOOTER1S_01.png"} name={"Since"} number={"SCP0346"} distance={"1.4"}/>

      </BottomScroll>
    </Container>
  );
}
const styles = StyleSheet.create({

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Main;



