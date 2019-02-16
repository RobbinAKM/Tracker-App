import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate}from '../navigationRef';

const authReducer =(state,action)=>{
  switch (action.type) {
    case "signup_error":
       return {...state,errorMessage:action.payload};
    case "signin_error":
       return {...state,errorMessage:action.payload};
    case "signup":
        return{errorMessage:'' ,token:action.payload};
    case "signin":
        return{errorMessage:'' ,token:action.payload};
    case "signout":
        return{token:null ,errorMessage:''};  
    case "clear_error_message":
        return{...state,errorMessage:''};
    default:
      return state;
  }
};

const getLocalStorage=dispatch=>{
  return async ()=>{
    const token = await AsyncStorage.getItem('token');
    if(token){
      dispatch({type:"signin",payload:token})
      navigate('TrackList');
    }else {
      navigate('Signup');
    }
  }
}

const signup= dispatch=>{
  return async ({email,password})=>{
    try {
      const response= await trackerApi.post('signup',{email,password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type:'signup' ,payload:response.data.token})
      navigate('TrackList');
    } catch (e) {
      dispatch({type:"signup_error" ,payload:"Something went wrong with the sign up"})
    }
  }
}

const signin= dispatch=>{
  return async ({email,password})=>{
    try {
      const response= await trackerApi.post('signin',{email,password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type:'signin' ,payload:response.data.token})
      navigate('TrackList');
    } catch (e) {
      dispatch({type:"signin_error" ,payload:"Something went wrong with the sign in.Please try again !!!"})
    }
  }
}

const loggout= dispatch=>{
  return async ()=>{
    await AsyncStorage.removeItem('token');
    dispatch({type:'signout'});
    navigate('authFlow');
  }
}

const clearErrorMessage=dispatch=>{
    return()=>{
      dispatch({type:"clear_error_message"});
    }
}

export const {Provider,Context}= createDataContext(authReducer,{signup,signin,loggout,clearErrorMessage,getLocalStorage},{token:'', errorMessage:''});
