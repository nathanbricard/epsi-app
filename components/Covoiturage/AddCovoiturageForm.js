import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddCovoiturageForm = ({ navigation }) => {
  const [lieuDepart, setLieuDepart] = useState('');
  const [dateHeureDepart, setDateHeureDepart] = useState('');
  const [lieuArrivee, setLieuArrivee] = useState('');
  const [dateHeureArrivee, setDateHeureArrivee] = useState('');
  const [placesDisponibles, setPlacesDisponibles] = useState('');
  const [vehicule, setVehicule] = useState('');
  const [proprietaire, setProprietaire] = useState('');
  const [conducteur, setConducteur] = useState('');

  const handleAddCovoiturage = async () => {
    const newCovoiturage = {
      lieuDepart,
      dateHeureDepart,
      lieuArrivee,
      dateHeureArrivee,
      placesDisponibles: parseInt(placesDisponibles),
      vehicule,
      proprietaire,
      conducteur,
    };

    // Ici, vous devez ajouter le code pour enregistrer le nouveau covoiturage dans votre base de données
    // Par exemple: await saveCovoiturage(newCovoiturage);

    navigation.goBack(); // Retourner à la liste des covoiturages après l'ajout
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter un nouveau covoiturage</Text>
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
        placeholder="Nombre de places disponibles"
        value={placesDisponibles}
        onChangeText={setPlacesDisponibles}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Informations sur le véhicule"
        value={vehicule}
        onChangeText={setVehicule}
        style={styles.input}
      />
      <TextInput
        placeholder="Propriétaire du véhicule"
        value={proprietaire}
        onChangeText={setProprietaire}
        style={styles.input}
      />
      <TextInput
        placeholder="Conducteur"
        value={conducteur}
        onChangeText={setConducteur}
        style={styles.input}
      />
      <Button title="Ajouter le covoiturage" onPress={handleAddCovoiturage} />
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

export default AddCovoiturageForm;
