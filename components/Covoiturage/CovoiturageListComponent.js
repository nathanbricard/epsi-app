import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet, FlatList, Text } from 'react-native';
import CovoiturageAnnonce from './CovoiturageComponent';
import { fetchCovoiturages } from '../api'; // Importez votre méthode d'API ici

const CovoiturageList = ({ navigation }) => {
  const [covoiturages, setCovoiturages] = useState([]);

  useEffect(() => {
    const getCovoiturages = async () => {
      const data = await fetchCovoiturages(); // Récupérer les annonces de la base de données
      setCovoiturages(data);
    };

    getCovoiturages();
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title="Ajouter un covoiturage"
        onPress={() => navigation.navigate('AddCovoiturage')}
      />
      {covoiturages.length === 0 ? (
        <Text>Aucune annonce de covoiturage disponible</Text>
      ) : (
        <FlatList>
          data={covoiturages}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CovoiturageAnnonce annonce={item} />}
          <Button title='Réserver' />
          //si appuie sur reserver : changement du booléen en BDD
        </FlatList>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default CovoiturageList;
