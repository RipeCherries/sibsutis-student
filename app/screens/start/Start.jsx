import React from 'react';
import {
  View, Text, ImageBackground, Pressable,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import StartStyles from './Start.styles';

function Start() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('SearchStart', { context: 'firstRun' });
  };

  return (
    <ImageBackground
      style={StartStyles.bg}
      source={require('../../../assets/start-screen-bg.png')}
    >
      <View style={StartStyles.container}>
        <Text style={StartStyles.title}>РАСПИСАНИЕ ЗАНЯТИЙ</Text>
        <Pressable
          style={StartStyles.btn}
          onPress={handlePress}
        >
          <Text style={StartStyles.btnText}>Выбрать группу</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

export default Start;
