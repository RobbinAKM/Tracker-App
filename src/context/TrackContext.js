import createDataContext from './createDataContext';
import tracker from '../api/tracker';


const TrackReducer =(state,action)=>{
  switch (action.type) {
    case 'fetch_tracks':
      return action.payload;
    default:
      return state;
  }
}
const fetchTracks=dispatch=>async ()=>{
  const response= await tracker.get('tracks');
  dispatch({type:'fetch_tracks',payload:response.data});
}

const createTracks=dispatch=>async (name,locations)=>{
  await tracker.post('tracks',{name,locations})
}

export const{Context,Provider}=createDataContext(
  TrackReducer,
  {fetchTracks,createTracks},
  []
)
