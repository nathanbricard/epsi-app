import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {MyIcon} from './MyIcons.js';
export const BottomNavBar = ({navigation}) => {
  return (
    <View style={styles.bottomNavBar}>
      <MyIcon text='home' navigation={navigation} name='Home'/>
      <MyIcon text='map' navigation={navigation} name='Carte'/>
      <MyIcon text='chat' navigation={navigation} name='home'/>
    </View>
  )


}

const styles = StyleSheet.create({
bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#8AA39B',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: 'absolute', // pour que la barre soit fixée en bas
    bottom: 0, // alignée au bas
    width: '100%',
    paddingVertical: 10, // un peu d'espace à l'intérieur de la barre
    shadowColor: '#000', // ombre pour un effet de levée
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5, // pour Android
  }
})