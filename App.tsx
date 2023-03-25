
import 'react-native-gesture-handler';
import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import COLORS from './data/colors';
import DetailsScreen from './views/screens/DetailsScreen';
import BottomNavigator from './views/navigation/BottomNavigation';
import OnBoardScreen from './views/screens/OnBoardScreen';
import LoginScreen from "./views/screens/LoginScreen";
import SignUpScreen from "./views/screens/SignUpSrceen";


const Stack = createStackNavigator();
export default function App() {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Sign" component={SignUpScreen} />
          <Stack.Screen name="Home" component={BottomNavigator} />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};
