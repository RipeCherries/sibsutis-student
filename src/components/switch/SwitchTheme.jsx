import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';

import Styles from "./switch-theme.scss";

const SwitchTheme = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={Styles.switch__container}>
      <Switch
        trackColor={{false: '#767577', true: '#506699'}}
        thumbColor={isEnabled ? '#E6E1E5' : '#E6E1E5'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{ transform: [{ scaleX: 1.25 }, { scaleY: 1.25 }] }}
      />
    </View>
  );
};

export default SwitchTheme;