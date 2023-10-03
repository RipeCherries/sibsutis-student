import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './main-navigation/MainNavigation';
import FirstRunNavigation from './first-run-navigation/FirstRunNavigation';

function Navigation() {
  const mainGroup = useSelector((store) => store.mainGroup);

  return (
    <NavigationContainer>
      {
                mainGroup ? (<MainNavigation />) : (<FirstRunNavigation />)
            }
    </NavigationContainer>
  );
}

export default Navigation;
