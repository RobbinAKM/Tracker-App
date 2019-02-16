let navigator;
import { NavigationActions } from 'react-navigation';

export const setNavigation =nav=>{
  navigator=nav;
}

export const navigate=(routeName,params)=>{
  navigator.dispatch(
     NavigationActions.navigate({
       routeName,
       params
     })
   );
};
