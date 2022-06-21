import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';
import { typography } from './src/theme/typography';
import { useFonts } from 'expo-font';
import Text from './src/components/text/text';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import { SafeAreaView } from 'react-native-web';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold': require('./assets/fonts/Spartan-Bold.ttf'),
    'Spartan-Regular': require('./assets/fonts/Spartan-Regular.ttf'),
  });

  if (!loaded) {
    return <Text>Font is loading...</Text>;
  }
  return (
    // <View style={styles.container}>
    //   <Text preset="h1" style={{ color: 'blue' }}>
    //     Open up App.js to start working on your app!
    //   </Text>
    //   <Text preset="small" style={{ marginTop: spacing[4], color: 'white' }}>
    //     Hello World
    //   </Text>
    //   <StatusBar style="auto" />
    // </View>
    <>
      {/* <NavigationContainer theme={DarkTheme}> */}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light"></StatusBar>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
