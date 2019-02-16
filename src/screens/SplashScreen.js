import React,{useEffect,useContext} from 'react';
import {Context as AuthContext} from '../context/AuthContext';

const SplashScreen=()=>{
  const {getLocalStorage}=useContext(AuthContext);

  useEffect(()=>{
    getLocalStorage();
  },[])

  return null ;
};

export default SplashScreen;
