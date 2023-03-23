import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartPage from "./src/views/StartPage";
import GroupSearch from "./src/views/GroupSearch";
import {NavigationContainer} from "@react-navigation/native";
import Navigator from "./src/routes/navigator";

export default function App() {
  return (
      <Navigator />
  );
}