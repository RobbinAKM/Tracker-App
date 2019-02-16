import React,{useContext} from 'react';
import{Context as LocationContext} from '../context/LocationContext';
import {Context as TrackContext} from '../context/TrackContext';
import {navigate}from '../navigationRef';

export default()=>{
  const{state:{name,locations},reset} = useContext(LocationContext);
  const {createTracks} =useContext(TrackContext);

  const saveTrack=async ()=>{
    await createTracks(name,locations);
    reset();
    navigate('TrackList');
  };

  return[saveTrack]
};
