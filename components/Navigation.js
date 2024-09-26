import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapComponent from './MapComponent';
import AnnonceComponent from './AnnonceComponent';
import AnnonceList from './AnnonceListComponent';
import AddAnnonceForm from './AddAnnonceForm';
import DetailCovoiturage from './Covoiturage/CovoiturageComponent';
import CovoiturageList from './Covoiturage/CovoiturageListComponent';
import AddCovoiturageForm from './Covoiturage/AddCovoiturageForm';
import Home from './Home';

const Stack = createStackNavigator();

export default function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Carte" component={MapComponent} />
        <Stack.Screen name="AnnonceVehicule" component={AnnonceComponent} />
        <Stack.Screen name="Annonces" component={AnnonceList} />
        <Stack.Screen name="AddAnnonce" component={AddAnnonceForm} />
        <Stack.Screen name="DetailCovoiturage" component={DetailCovoiturage} />
        <Stack.Screen name="AnnoncesCovoiturage" component={CovoiturageList} />
        <Stack.Screen name="AddCovoiturage" component={AddCovoiturageForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
