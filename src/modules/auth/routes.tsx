import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {Start} from './screens/Start';

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        cardStyle: {backgroundColor: '#ffffff'},
        headerShown: false,
      }}>
      <AuthStack.Screen name="Start" component={Start} />
    </AuthStack.Navigator>
  );
};
export default AuthRoutes;
