import React,{useContext,useEffect} from 'react';
import {View,StyleSheet} from 'react-native';
import Spacer from '../components/Spacer'
import {NavigationEvents} from 'react-navigation';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen =({navigation})=>{
  const {state,signin,clearErrorMessage}=useContext(AuthContext);
  return (
    <View style={styles.container}>
    <NavigationEvents onWillFocus={clearErrorMessage}/>
    <AuthForm
      title="Sign in to your account"
      errorMessage={state.errorMessage}
      buttonText="Sign In"
      onPressFunc={signin}/>
      <NavLink trackName="Signup"  text="New to the app ? Create your account now"/>
   </View>
 )
};

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    marginBottom:200
  }
})

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SigninScreen;
