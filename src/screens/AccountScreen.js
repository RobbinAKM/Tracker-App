import React,{useContext} from 'react';
import { Text,Button} from 'react-native-elements';
import { StyleSheet,SafeAreaView } from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import Spacer from '../components/Spacer';
import { Ionicons } from '@expo/vector-icons';

const AccountScreen =()=>{
    const {loggout}=useContext(AuthContext);

   return (
    <SafeAreaView forceInset={{top:'always'}}>
     <Spacer>
     <Text style={{fontSize:48}}>AccountScreen</Text>
     </Spacer>
     <Spacer>
     <Button title="Signout" onPress={loggout}/>
     </Spacer>
   </SafeAreaView>
  )
};

AccountScreen.navigationOptions={
  title:'Account',
  tabBarIcon:<Ionicons name="settings-sharp" size={20} color="black" />
}


export default AccountScreen;
