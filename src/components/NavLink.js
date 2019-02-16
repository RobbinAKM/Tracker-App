import React,{useContext} from 'react';
import {TouchableOpacity,Text,StyleSheet} from 'react-native';
import Spacer from '../components/Spacer';
import {withNavigation}from 'react-navigation'

const NavLink =({navigation,trackName,text})=>{

  return (
    <TouchableOpacity onPress={()=>{navigation.navigate(trackName)}}>
     <Spacer>
    <Text style={styles.link}>{text}</Text>
    </Spacer>
   </TouchableOpacity>
 )
};

const styles=StyleSheet.create({
  link:{
    fontSize:17,
    color:'blue'
  }
});

export default withNavigation(NavLink);
