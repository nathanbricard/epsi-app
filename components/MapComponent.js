import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback, Animated, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { BottomNavBar } from './BottomNavBar';

const MapComponent = ({ navigation }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [accordionHeight] = useState(new Animated.Value(0)); // Valeur de la hauteur de l'accordéon pour l'ouverture fermeture
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fonction pour récupérer les données de l'API
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/random/parkings');
        const json = await response.json();
        setData(json); // Mettre à jour les données récupérées
        setLoading(false); // Arrêter le loader après récupération
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const Item = ({ item }) => {
    if (!item.status) {
      return null; // Afficher uniquement si item.status est true pour savoir si la place est prise
    }

    return (
      <Marker
        coordinate={{ latitude: item.latitude, longitude: item.longitude }} //Coordonées de la place de parking
        onPress={() => handleMarkerPress(String(item.sensor_id))}
      >
        <View style={styles.markerContainer}>
          <View style={styles.markerBackgroundParking}>
            <Image source={require('../assets/parking.png')} style={styles.markerIcon} />
          </View>
        </View>
      </Marker>
    );
  };

  const initialRegion = {
    latitude: 47.4579292,
    longitude: -0.5137092,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const handleMarkerPress = (markerId) => { // gère les conditions d'ouverture et fermeture d'un accordéon 
    if (selectedMarker === markerId) {
      closeAccordion();
    } else {
      closeAccordion(() => {
        setSelectedMarker(markerId);
        openAccordion();
      });
    }
  };

  const closeAccordion = (callback) => { // Fermeture accordéon
    Animated.timing(accordionHeight, {
      toValue: 0,
      duration: 150,
      useNativeDriver: false,
    }).start(() => {
      setIsAccordionOpen(false);
      if (callback) callback();
    });
  };

  const openAccordion = () => { // Ouverture Accordeon
    Animated.timing(accordionHeight, {
      toValue: 200,
      duration: 150,
      useNativeDriver: false,
    }).start(() => {
      setIsAccordionOpen(true);
    });
  };

  const handleMapPress = () => { // Abaisse l'accordeon ouvert lorsqu'on clique dans le vide
    if (isAccordionOpen) {
      closeAccordion();
      setSelectedMarker(null);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Chargement...</Text>
      </View>
    );
  }

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
          {data.map(item => ( // Pour chaque item qui seront places sur la map
            <Item key={item.sensor_id} item={item} />
          ))}
        </MapView>

        <Animated.View style={[styles.accordion, { height: accordionHeight }]}>
          <View style={styles.accordionContent}>
            {selectedMarker === 'marker1' && ( // Manque la gestion pour les markers appelés par l'API par manque de temps, à améliorer
              <View style={styles.accordionDetail}>
                <Text style={styles.accordionDetailContent}>Informations sur Ma Position</Text>
              </View>
            )}
            {selectedMarker === 'marker2' && (
              <Text>Informations sur Une Autre Position</Text>
            )}
            {selectedMarker === 'marker3' && (
              <Text>Informations sur Encore Une Position</Text>
            )}
          </View>
        </Animated.View>

        <BottomNavBar navigation={navigation} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: '100%',
    height: '100%',
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
    height: '80%', 
  },
  markerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerBackgroundParking: {
    backgroundColor: 'blue',
    borderRadius: 25,
    padding: 5, 
  },
  markerBackgroundBike: {
    backgroundColor: 'brown',
    borderRadius: 25, 
    padding: 5, 
  },
  markerBackgroundScooter: {
    backgroundColor: 'green',
    borderRadius: 25, 
    padding: 5, 
  },
  markerIcon: {
    width: 30, 
    height: 30, 
  },
  accordion: {
    position: 'absolute',
    bottom: 50, 
    left: 0,
    right: 0,
    backgroundColor: '#8AA39B',
    overflow: 'hidden',
    elevation: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  accordionDetail: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#5C6F68',
    height: '100%',
    
  },
  accordionDetailContent: {
  color: 'white',
  paddingLeft: 15,
  paddingTop: 15,
  },
  accordionContent: {
    padding: 15,
  },
});

export default MapComponent;
