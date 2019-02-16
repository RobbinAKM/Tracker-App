import * as Location from  'expo-location';


const tenMetersAsDegree=0.0001;

const getLocation = increment=>{
  return{
    timestamp:10000000,
    coords:{
    latitude:35.658082486907496+increment*tenMetersAsDegree,
    longitude:139.7016317899684+increment*tenMetersAsDegree,
    altitude:5,
    altitudeAccuracy:5,
    accuracy:5,
    heading:0,
    speed:0
    }
  }
};

let counter=0 ;

setInterval(()=>{
  Location.EventEmitter.emit('Expo.locationChanged',{
    watchId:Location._getCurrentWatchId(),
    location:getLocation(counter)
  });
  counter++
},1000);
