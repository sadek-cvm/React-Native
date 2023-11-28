import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import EcranAccueil from './EcranAccueil';
import EcranAjouter from './EcranAjouter';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Accueil"           component={EcranAccueil}/>
        <Stack.Screen name="AjouterEvaluation" component={EcranAjouter}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}