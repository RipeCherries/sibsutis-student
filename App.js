import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartPage from "./src/views/StartPage";
import GroupSearch from "./src/views/GroupSearch";

export default function App() {
  return (
    <View>
      {/*<GroupSearch/>*/}
        <StartPage />
    </View>
  );
}