//import '../_mocklocation';
import React,{useContext,useCallback} from 'react';
import {View,Text} from 'react-native-elements';
import { StyleSheet,SafeAreaView } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import useLocation from '../hooks/useLocation';
import { AntDesign } from '@expo/vector-icons';

import TrackForm from '../components/TrackForm';

import {Context as LocationContext} from '../context/LocationContext';

const TrackCreateScreen=({isFocused})=>{

  const {state,addLocation}=useContext(LocationContext)
  const callback= useCallback(location=>{
    addLocation(location,state.recording);
  },[state.recording])
  const [err] = useLocation(isFocused||state.recording,callback);


  return(
    <SafeAreaView forceInset={{top:'always'}}>
     <Text h2>TrackCreateScreen</Text>
     <Map/>
     {err?<Text>Please enable the location</Text>:null}
     <TrackForm/>
    </SafeAreaView>
  )
};

TrackCreateScreen.navigationOptions={
  title:'Add Track',
  tabBarIcon:<AntDesign name="pluscircle" size={24} color="black" />
}


export default withNavigationFocus(TrackCreateScreen);
