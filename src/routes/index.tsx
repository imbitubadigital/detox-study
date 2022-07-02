import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from '../modules/auth/routes';

const AppStack = createStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="AuthRoutes" component={AuthStack} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
