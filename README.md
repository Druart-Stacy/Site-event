# Convention et Concours Cosplay

Ce projet est une plateforme en ligne dédiée à la gestion d'une convention cosplay avec un concours. Il permet aux participants de s'inscrire à l'événement, de soumettre leurs participations au concours, et d'obtenir toutes les informations nécessaires concernant le programme, les invités, les activités, ainsi que les détails du concours.

!!!projet fictif

## Fonctionnalités principales

- **Inscription à la convention** : Les utilisateurs peuvent s'inscrire pour participer à la convention, consulter le programme des événements, et découvrir les invités présents.
- **Concours de Cosplay** : Les participants peuvent s'inscrire au concours de cosplay, soumettre leurs photos, et consulter les critères de jugement.
- **Carrousel d'images** : Un carrousel interactif affiche les images des participants et les moments forts de la convention.
- **Pages de détails** : Chaque événement et concours dispose de ses propres pages avec des informations détaillées.
- **Footer dynamique** : Un pied de page dynamique qui change en fonction des sections du site.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- Un éditeur de texte (par exemple, [Visual Studio Code](https://code.visualstudio.com/))
- Un navigateur moderne (Chrome, Firefox, etc.)
- Une connexion Internet pour charger les ressources externes




## Utilisation
Inscription à la convention
Accédez à la page principale de la convention.
Consultez le programme de l'événement et les activités disponibles.
Inscrivez-vous à la convention via le formulaire d'inscription (fonctionnalité à implémenter selon le backend ou les solutions choisies).
Concours de Cosplay
Allez sur la page du concours.
Soumettez vos photos de cosplay en suivant les instructions de la page de soumission.
Consultez les résultats du concours et les prix à gagner.
Carrousel d'images
Le carrousel sur la page principale affiche une sélection d'images des participants, de cosplays, et des moments forts de la convention. Vous pouvez naviguer entre les images en utilisant les boutons de navigation à gauche et à droite.

## Technologies utilisées
HTML/CSS pour la structure et le style des pages.
JavaScript pour la gestion dynamique du contenu (carrousel, pied de page).
Bootstrap pour la mise en page responsive et l'interface utilisateur.
jQuery pour certaines interactions dynamiques.
Auteurs
DragonBleu98 - Développeur principal et créateur du projet.
Licence
Ce projet est sous la licence MIT - voir le fichier LICENSE pour plus de détails.


## Installation

Clonez ce repository sur votre machine locale avec la commande suivante :

```bash
git clone https://github.com/DragonBleu98/convention-cosplay.git


convention-cosplay/
│
├── assets/
│   ├── img/           # Contient les images utilisées dans le site
│   ├── style.css      # Fichier CSS personnalisé
│   ├── licences/      # Fichier avec les licences
│
├── index.html         # Page principale de la convention
├── galerie.html       # Page avec un carrousel d'images des participants
├── header.js          # Script pour charger dynamiquement l'entête
├── infos.html         # paged'information
├── about.html         # page d'informationurles membres du staff
├── footer.js          # Script pour charger dynamiquement le pied de page
└── README.md          # Ce fichier