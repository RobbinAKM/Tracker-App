import React,{useState} from 'react';
import {StyleSheet} from 'react-native';
import { Text, Input ,Button} from 'react-native-elements';
import Spacer from '../components/Spacer'

const AuthForm=({title,errorMessage,buttonText,onPressFunc})=>{
  const[email,setMail]=useState('');
  const [password,setPassword]=useState('');

  return(
    <>
    <Spacer>
     <Text h1>{title}</Text>
    </Spacer>
     <Input placeholder='Email' value={email} onChangeText={setMail} autoCorrect={false} autoCapitalize="none"/>
     <Input placeholder='Password' secureTextEntry={true} value={password} onChangeText={setPassword} autoCorrect={false} autoCapitalize="none"/>
     {errorMessage?<Text style={styles.error}>{errorMessage}</Text>:null}
     <Button title={buttonText} onPress={()=>onPressFunc({email,password})}/>
    </>
  )
};


const styles=StyleSheet.create({
  error:{
    color:'red',
    fontSize:16,
    marginBottom:15
  }
})

export default AuthForm;
