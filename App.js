import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BackButton from './src/components/BackButton';
import Group from "./src/components/Group";
import SearchField from "./src/components/SearchField";
import GroupSearch from './src/views/GroupSearch';

export default function App() {
  return (
    <View>
      <GroupSearch/>
    </View>
  );
}