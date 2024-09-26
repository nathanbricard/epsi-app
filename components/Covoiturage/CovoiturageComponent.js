import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CovoiturageAnnonce = ({ annonce }) => {
  if (!annonce) return null; // Ne rien rendre si annonce est undefined

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Annonce de {annonce.conducteur || 'Inconnu'}</Text>
      <Text>Lieu de départ : {annonce.lieuDepart || 'Non spécifié'}</Text>
      <Text>Date et heure de départ : {annonce.dateHeureDepart || 'Non spécifié'}</Text>
      <Text>Lieu d'arrivée : {annonce.lieuArrivee || 'Non spécifié'}</Text>
      <Text>Date et heure d'arrivée : {annonce.dateHeureArrivee || 'Non spécifié'}</Text>
      <Text>Nombre de places disponibles : {annonce.placesDisponibles || 'Non spécifié'}</Text>
      <Text>Informations sur le véhicule : {annonce.vehicule || 'Non spécifié'}</Text>
      <Text>Propriétaire : {annonce.proprietaire || 'Inconnu'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default CovoiturageAnnonce;
