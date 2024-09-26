import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback, Animated } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { BottomNavBar } from './BottomNavBar';

const MapComponent = ({ navigation }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [accordionHeight] = useState(new Animated.Value(0));

  const initialRegion = {
    latitude: 47.4579292,
    longitude: -0.5137092,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const handleMarkerPress = (markerId) => {
    if (selectedMarker === markerId) {
      closeAccordion();
    } else {
      closeAccordion(() => {
        setSelectedMarker(markerId);
        openAccordion();
      });
    }
  };

  const closeAccordion = (callback) => {
    Animated.timing(accordionHeight, {
      toValue: 0,
      duration: 150,
      useNativeDriver: false,
    }).start(() => {
      setIsAccordionOpen(false);
      if (callback) callback();
    });
  };

  const openAccordion = () => {
    Animated.timing(accordionHeight, {
      toValue: 200,
      duration: 150,
      useNativeDriver: false,
    }).start(() => {
      setIsAccordionOpen(true);
    });
  };

  const handleMapPress = () => {
    if (isAccordionOpen) {
      closeAccordion();
      setSelectedMarker(null);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleMapPress}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>MobilEpsi</Text>
          <Image 
            source={require('../assets/openart-b223699e-d9de-454a-9b81-855c695b5b31.png')} 
            style={styles.logo}
          />
        </View>

        <MapView
          style={styles.map}
          initialRegion={initialRegion}
          showsUserLocation={true}
        >
          <Marker
            coordinate={{ latitude: 47.4579292, longitude: -0.5137092 }}
            title="Ma Position"
            onPress={() => handleMarkerPress('marker1')}
          >
            <View style={styles.markerContainer}>
              <View style={styles.markerBackgroundBike}>
                <Image source={require('../assets/pedal_bike.png')} style={styles.markerIcon} />
              </View>
            </View>
          </Marker>
          <Marker
            coordinate={{ latitude: 47.4579046, longitude: -0.5138500 }}
            title="Une Autre Position"
            onPress={() => handleMarkerPress('marker2')}
          >
            <View style={styles.markerContainer}>
              <View style={styles.markerBackgroundScooter}>
                <Image source={require('../assets/scooter.png')} style={styles.markerIcon} />
              </View>
            </View>
          </Marker>
          <Marker
            coordinate={{ latitude: 47.4579999, longitude: -0.5139992 }}
            title="Encore Une Position"
            onPress={() => handleMarkerPress('marker3')}
          >
            <View style={styles.markerContainer}>
              <View style={styles.markerBackgroundParking}>
                <Image source={require('../assets/parking.png')} style={styles.markerIcon} />
              </View>
            </View>
          </Marker>
        </MapView>

        <Animated.View style={[styles.accordion, { height: accordionHeight }]}>
          <View style={styles.accordionContent}>
            {selectedMarker === 'marker1' && (
              <Text>Informations sur Ma Position</Text>
            )}
            {selectedMarker === 'marker2' && (
              <Text>Informations sur Une Autre Position</Text>
            )}
            {selectedMarker === 'marker3' && (
              <Text>Informations sur Encore Une Position</Text>
            )}
          </View>
        </Animated.View>
        
        {/* Inclure le BottomNavBar ici */}
        <BottomNavBar navigation={navigation} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%', // Changez à '100%' pour que le BottomNavBar soit visible
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
  map: {
    width: '100%',
    height: '80%', // Gardez cela pour le style du MapView
  },
  markerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerBackgroundParking: {
    backgroundColor: 'blue', // ou 'red' selon vos besoins
    borderRadius: 25, // ajustez selon la taille de votre icône
    padding: 5, // espace autour de l'icône
  },
  markerBackgroundBike: {
    backgroundColor: 'brown', // ou 'red' selon vos besoins
    borderRadius: 25, // ajustez selon la taille de votre icône
    padding: 5, // espace autour de l'icône
  },
  markerBackgroundScooter: {
    backgroundColor: 'green', // ou 'red' selon vos besoins
    borderRadius: 25, // ajustez selon la taille de votre icône
    padding: 5, // espace autour de l'icône
  },
  markerIcon: {
    width: 30, // ajustez selon votre icône
    height: 30, // ajustez selon votre icône
  },
  accordion: {
    position: 'absolute',
    bottom: 50, // Ajustez cette valeur si nécessaire pour donner de l'espace au BottomNavBar
    left: 0,
    right: 0,
    backgroundColor: '#8AA39B',
    overflow: 'hidden',
    elevation: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  accordionContent: {
    padding: 15,
  },
});

export default MapComponent;
