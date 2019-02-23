import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import LandingScreen from '../screens/LandingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const AuthStack = createStackNavigator({
  Landing: LandingScreen,
  Login: LoginScreen,
  Signup: SignupScreen,
});

export default createAppContainer(createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStack,
  Main: MainTabNavigator,
}, {
  initialRouteName: 'AuthLoading'
}));
