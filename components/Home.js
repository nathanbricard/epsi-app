import { MyButton } from './MyButton.js';
import { BottomNavBar } from './BottomNavBar';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>MobilEpsi</Text>
            <Image 
              source={require('../assets/openart-b223699e-d9de-454a-9b81-855c695b5b31.png')} 
              style={styles.logo}
            />
          </View>

          <View style={styles.navbar}>
            <MyButton text='Carte' navigation={navigation} name="Carte" />
            <MyButton text='Location' navigation={navigation} name="" />
            <MyButton text='Covoiturage' navigation={navigation} name="detailCovoiturage" />
          </View>

          <Image 
            source={require('../assets/logo_epsi_8b6f0271b8.png')}
            style={styles.homeImg}
            resizeMode="contain"
          />
        </View>
    
      
      <BottomNavBar navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#5C6F68',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
  },
  logo: {
    width: 50,
    height: 50,
    marginLeft: 'auto',
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    flex: 1,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 55,
  },
  homeImg: {
    width: '80%',
    marginVertical: 20,
  },
});

export default Home;
