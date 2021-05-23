import React from 'react';
import { BikeItem, BikeItemTitle, BikeItemSubtitle, BikeItemButtonText, BikeItemButton } from './styles';
import { View, Image } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

export function BikeComponentItem(props: any) {
  return <BikeItem>
    <Image source={{ uri: props.picUrl }}
      style={{ width: 100, height: 100, marginTop: -50 }} />
    <BikeItemTitle>
      {props.name}
    </BikeItemTitle>
    <BikeItemSubtitle>
      {props.number}
    </BikeItemSubtitle>
    <BikeItemButton>
      <View>
        <Icon name="place"
          size={22}
          color="white" />
      </View>
      <BikeItemButtonText>
        {props.distance}km
      </BikeItemButtonText>
    </BikeItemButton>
  </BikeItem>;
}
