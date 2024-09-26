import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet, FlatList } from 'react-native';
import Annonce from './AnnonceComponent';
import { fetchAnnonces } from './api'; // Importez votre méthode d'API ici

const AnnonceList = ({ navigation }) => {
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    const getAnnonces = async () => {
      const data = await fetchAnnonces(); // Récupérer les annonces de la base de données
      setAnnonces(data);
    };

    getAnnonces();
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title="Ajouter une annonce"
        onPress={() => navigation.navigate('AddAnnonce')}
      />
      <FlatList>
        data={annonces}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Annonce annonce={item} />}
        <Button title='reserver' />

      </FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default AnnonceList;
