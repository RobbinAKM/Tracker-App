import React from 'react';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import SplashScreen from './src/screens/SplashScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {Provider as LocationProvider} from './src/context/LocationContext';
import {Provider as TrackProvider} from './src/context/TrackContext';
import {setNavigation} from './src/navigationRef';
import { FontAwesome } from '@expo/vector-icons';


import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const TrackListFlow =createStackNavigator({
  TrackList:TrackListScreen ,
  TrackDetail:TrackDetailScreen
});

TrackListFlow.navigationOptions={
  title:'Track List',
  tabBarIcon:<FontAwesome name="th-list" size={20} color="black" />
}

const switchNavigator =createSwitchNavigator({
  SplashScreen:SplashScreen,
  authFlow:createStackNavigator({
    Signup:SignupScreen,
    Signin:SigninScreen
  }),
  trackFlow:createBottomTabNavigator({
    TrackListFlow,
    TrackCreate:TrackCreateScreen ,
    Account:AccountScreen
  }),
});

const App = createAppContainer(switchNavigator);
export default ()=>{
  return(
<TrackProvider>
  <LocationProvider>
     <AuthProvider>
      <App ref={navigator=>{setNavigation(navigator)}}/>
     </AuthProvider>
  </LocationProvider>
</TrackProvider>
  )
}
