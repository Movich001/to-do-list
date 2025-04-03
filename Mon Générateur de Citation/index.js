// Liste de citations
const citations = [
    "La vie est ce qui arrive quand vous êtes occupé à faire d'autres projets. — John Lennon",
    "Le seul moyen de faire du bon travail est d'aimer ce que vous faites. — Steve Jobs",
    "Soyez le changement que vous voulez voir dans le monde. — Mahatma Gandhi",
    "La meilleure façon de prédire l'avenir est de le créer. — Peter Drucker",
    "L'échec est simplement l'opportunité de recommencer, cette fois de manière plus intelligente. — Henry Ford",
    "La vie n'est pas mesurée par le nombre de respirations que nous prenons, mais par les moments qui nous coupent le souffle. — Anonyme"
];

// Récupération des éléments HTML
const generateButton = document.getElementById('generateButton');  // Le bouton
const citationText = document.getElementById('citation');  // Le paragraphe pour afficher la citation

// Fonction pour générer une citation aléatoire
function generateCitation() {
    // Sélectionne un indice aléatoire du tableau de citations
    const randomIndex = Math.floor(Math.random() * citations.length);
    
    // Mets à jour le texte du paragraphe avec la citation sélectionnée
    citationText.textContent = citations[randomIndex];
}

// Ajouter un événement au bouton pour générer une citation lors du clic
generateButton.addEventListener('click', generateCitation);
