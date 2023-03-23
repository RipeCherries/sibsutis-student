import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SwitchTheme from './src/components/SwitchTheme';
import BackButton from './src/components/BackButton';
import Group from "./src/components/Group";
import SearchField from "./src/components/SearchField";
import GroupSearch from './src/views/GroupSearch';
import SettingsView from './src/views/SettingsView';

export default function App() {
  return (
    <View>
      <SettingsView/>
    </View>
  );
}