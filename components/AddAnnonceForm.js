import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddAnnonceForm = ({ navigation }) => {
  const [lieuDepart, setLieuDepart] = useState('');
  const [dateHeureDepart, setDateHeureDepart] = useState('');
  const [lieuArrivee, setLieuArrivee] = useState('');
  const [dateHeureArrivee, setDateHeureArrivee] = useState('');
  const [proprietaire, setProprietaire] = useState('');
  const [loueur, setLoueur] = useState('');
  const [reserve, setReserve] = useState(true);

  const handleAddAnnonce = async () => {
    const newAnnonce = {
      lieuDepart,
      dateHeureDepart,
      lieuArrivee,
      dateHeureArrivee,
      proprietaire,
      loueur,
      reserve,
    };

    // Ici, vous devez ajouter le code pour enregistrer la nouvelle annonce dans votre base de données
    // Par exemple: await saveAnnonce(newAnnonce);

    navigation.goBack(); // Retourner à la liste des annonces après l'ajout
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter une nouvelle annonce</Text>
      <TextInput
        placeholder="Lieu de départ"
        value={lieuDepart}
        onChangeText={setLieuDepart}
        style={styles.input}
      />
      <TextInput
        placeholder="Date et heure de départ"
        value={dateHeureDepart}
        onChangeText={setDateHeureDepart}
        style={styles.input}
      />
      <TextInput
        placeholder="Lieu d'arrivée"
        value={lieuArrivee}
        onChangeText={setLieuArrivee}
        style={styles.input}
      />
      <TextInput
        placeholder="Date et heure d'arrivée"
        value={dateHeureArrivee}
        onChangeText={setDateHeureArrivee}
        style={styles.input}
      />
      <TextInput
        placeholder="Propriétaire du véhicule"
        value={proprietaire}
        onChangeText={setProprietaire}
        style={styles.input}
      />
      <TextInput
        placeholder="Pseudo du loueur"
        value={loueur}
        onChangeText={setLoueur}
        style={styles.input}
      />

      <Button title="Ajouter l'annonce" onPress={handleAddAnnonce} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default AddAnnonceForm;
