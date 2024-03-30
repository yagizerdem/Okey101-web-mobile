import * as ScreenOrientation from "expo-screen-orientation";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function App() {
ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  return (
  <HomeScreen></HomeScreen>
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
