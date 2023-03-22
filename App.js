import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Group from "./src/components/Group";
import SearchField from "./src/components/SearchField";

export default function App() {
  return (
    <View>
      {/*<Text>Hello World! ABOBA 228</Text>*/}
      {/*<StatusBar style="auto" />*/}
        <SearchField />
      <Group groupName="ИП-016" />
      <Group groupName="ИП-016" />
      <Group groupName="ИП-016" />
      <Group groupName="ИП-016" />
      <Group groupName="ИП-016" />
      <Group groupName="ИП-016" />
      <Group groupName="ИП-016" />
      <Group groupName="ИП-016" />
      <Group groupName="ИП-016" />
      <Group groupName="ИП-016" />
      <Group groupName="ИП-016" />
      <Group groupName="ИП-016" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
