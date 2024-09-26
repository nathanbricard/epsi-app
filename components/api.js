export const fetchAnnonces = async () => {
  // Remplacez ceci par votre code d'API pour récupérer les annonces
  // Par exemple :
  // const response = await fetch('YOUR_API_ENDPOINT');
  // const data = await response.json();
  return [
    {
      id: 1,
      lieuDepart: 'Paris',
      dateHeureDepart: '2024-09-25T10:00:00Z',
      lieuArrivee: 'Lyon',
      dateHeureArrivee: '2024-09-25T12:00:00Z',
      proprietaire: 'John Doe',
      loueur: 'Jane Smith',
      reserve: false,
    },
    // Ajoutez d'autres annonces ici
  ];
};
