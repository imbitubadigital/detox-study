import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from '../modules/auth/routes';
import {Chat} from '../modules/auth/screens/Chat';

const AppStack = createStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="Chat" component={Chat} />
      <AppStack.Screen name="AuthRoutes" component={AuthStack} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
