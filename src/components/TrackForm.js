import React,{useContext} from 'react';
import {StyleSheet} from 'react-native';
import { Text, Input ,Button} from 'react-native-elements';
import Spacer from '../components/Spacer'
import {Context as LocationContext} from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';


const TrackForm =()=>{
  const {
    state:{recording,name,locations},
    startRecording,stopRecording,addName
  }= useContext(LocationContext);

 const [saveTrack]=useSaveTrack();

  return(
    <>
     <Spacer>
       <Input value={name}  onChangeText={addName}  placeholder='Enter Name'/>
      </Spacer>
      <Spacer>
       {recording
         ?<Button title="Stop" onPress={stopRecording}/>
         : <Button title="Start Record" onPress={startRecording}/>
       }
       </Spacer>
       <Spacer>
        {!recording && locations.length?<Button title="Save your track" onPress={saveTrack}/>:null}
       </Spacer>
    </>
  );
};

export default TrackForm;
