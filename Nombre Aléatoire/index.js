// Fonction pour générer un nombre aléatoire
function generateRandomNumber() {
  // Générer un nombre aléatoire entre 1 et 100
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  
  // Mettre à jour l'élément avec l'ID "randomNumber" pour afficher le nombre généré
  document.getElementById('randomNumber').textContent = randomNumber;
}

