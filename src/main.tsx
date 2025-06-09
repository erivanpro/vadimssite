// Importation des modules nécessaires
import { StrictMode } from 'react'; // StrictMode aide à détecter des erreurs dans le développement
import { createRoot } from 'react-dom/client'; // Fonction pour créer la racine de l'application React
import App from './App'; // Importation du composant principal de l'application
// Création du "root" React et rendu de l'application
createRoot(document.getElementById('root')!).render(
  <StrictMode> 
    <App />
  </StrictMode>,
);
