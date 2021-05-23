import React from 'react';
import Icon from '@expo/vector-icons/MaterialIcons';
import { ComebackButton, TopBox, Title } from './styles';
import { TouchableOpacity, View } from 'react-native';


export function Top() {

  return (
    <View style={{padding:20}}>
      <TopBox>
        <ComebackButton>
          <Icon name="chevron-left"
            size={42}
            color="white" />
        </ComebackButton>
        <TouchableOpacity>
          <Icon name="more-vert"
            size={42} color="white" />
        </TouchableOpacity>
      </TopBox>
      <Title marginTop={10}>
        Available
      </Title>
    </View>
  )
}
