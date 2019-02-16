import React,{useContext} from 'react';
import {View,StyleSheet} from 'react-native';
import Spacer from '../components/Spacer'
import {NavigationEvents} from 'react-navigation';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen =({navigation})=>{
  const {state,signup,clearErrorMessage}=useContext(AuthContext);

  return (
    <View style={styles.container}>
    <NavigationEvents onWillFocus={clearErrorMessage}/>
    <AuthForm
      title="Create your account"
      errorMessage={state.errorMessage}
      buttonText="Sign Up"
      onPressFunc={signup}/>
      <NavLink trackName="Signin"  text="Already have an account? Sign In"/>
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

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SignupScreen;
