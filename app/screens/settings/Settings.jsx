import React, { useState, useContext } from 'react';
import { View, Text, Switch } from 'react-native';
import MainContainer from '../../components/main-container/MainContainer';
import { ThemeContext } from '../../context/ThemeContext';

import { colors } from '../../constants/theme';
import SettingsStyles from './Settings.styles';

function Settings() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const themeColors = colors[theme];

  const [themeSwitchIsActive, setThemeSwitchIsActive] = useState(theme === 'dark');
  const handleSwitch = () => {
    toggleTheme();
    setThemeSwitchIsActive((prevState) => !prevState);
  };

  return (
    <MainContainer>
      <View style={SettingsStyles.header}>
        <Text style={[SettingsStyles.headerTitle, { color: themeColors.text }]}>Настройки</Text>
        <View style={[SettingsStyles.headerUnderline, { backgroundColor: themeColors.primary }]} />
      </View>
      <View style={SettingsStyles.menu}>
        <View style={SettingsStyles.menuItem}>
          <Text style={[SettingsStyles.menuItemDescription, { color: themeColors.text }]}>Тёмная тема</Text>
          <Switch
            style={SettingsStyles.switch}
            value={themeSwitchIsActive}
            onValueChange={handleSwitch}
            thumbColor={themeSwitchIsActive ? themeColors.text : themeColors.primary}
            trackColor={{
              false: themeColors.tertiary,
              true: themeColors.primary,
            }}
          />
        </View>
        <View style={SettingsStyles.menuItem}>
          <Text style={[SettingsStyles.menuItemDescription, { color: themeColors.text }]}>
            Изменить основную группу
          </Text>
        </View>
      </View>
      <View style={SettingsStyles.appInfo}>
        <Text>sibsutis-schedule v. 1.0.0</Text>
      </View>
    </MainContainer>
  );
}

export default Settings;
